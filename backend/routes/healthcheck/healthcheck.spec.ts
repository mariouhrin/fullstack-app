import { expect } from 'chai';
import { healthCheck } from './healthcheck.controller';

describe('healthCheck', () => {
  it('should return status healthy', async () => {
    const returnValue = healthCheck();

    expect(returnValue).to.deep.equal({
      status: 'Healthy!'
    });
  });
});
