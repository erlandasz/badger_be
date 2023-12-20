// eslint-disable-next-line import/no-extraneous-dependencies
import { Test } from '@nestjs/testing';

import { AppModule } from '../../app.module';

export const compileTestModule = () =>
    Test.createTestingModule({
        imports: [AppModule],
    }).compile();
