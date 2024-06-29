import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CrudLogController } from "../crudLog.controller";
import { CrudLogService } from "../crudLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  action: "exampleAction",
  createdAt: new Date(),
  date: new Date(),
  entite: "exampleEntite",
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  action: "exampleAction",
  createdAt: new Date(),
  date: new Date(),
  entite: "exampleEntite",
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    action: "exampleAction",
    createdAt: new Date(),
    date: new Date(),
    entite: "exampleEntite",
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  action: "exampleAction",
  createdAt: new Date(),
  date: new Date(),
  entite: "exampleEntite",
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createCrudLog() {
    return CREATE_RESULT;
  },
  crudLogs: () => FIND_MANY_RESULT,
  crudLog: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CrudLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CrudLogService,
          useValue: service,
        },
      ],
      controllers: [CrudLogController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /crudLogs", async () => {
    await request(app.getHttpServer())
      .post("/crudLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /crudLogs", async () => {
    await request(app.getHttpServer())
      .get("/crudLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /crudLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/crudLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /crudLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/crudLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /crudLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/crudLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/crudLogs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
