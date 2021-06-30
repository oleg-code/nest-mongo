import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

describe('UsersService', () => {
  let Service: UsersService;
  let Controller: UsersController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
     }).compile();

    Service = moduleRef.get<UsersService>(UsersService);
    Controller = moduleRef.get<UsersController>(UsersController);
  });

  describe('findUser', () => {
  it('should be defined', async () => {
    const result = ['test']
    jest.spyOn(UsersService, 'findUser').mockImplementationOnce(() => result);
    expect(await UsersService.findUser()).toBe(result);
  
  });
});
function result(result: any) {
  throw new Error('Function not implemented.')
};

});
