import { JwtAuthGuard } from './jwt.guard';

describe('JwtGuardGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuard()).toBeDefined();
  });
});
