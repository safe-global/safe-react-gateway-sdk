import { getOwnedSafes } from '../src'
import config from './config'

describe('getOwnedSages tests', () => {
  it('should get owned safes on rinkeby', async () => {
    const data = await getOwnedSafes(config.baseUrl, '4', '0x661E1CF4aAAf6a95C89EA8c81D120E6c62adDFf9')

    expect(data).toEqual({
      safes: ['0x9B5dc27B104356516B05b02F6166a54F6D74e40B', '0xb3b83bf204C458B461de9B0CD2739DB152b4fa5A'],
    })
  })
})