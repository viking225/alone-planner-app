import type { RegisterRequestDTO } from '@lib/core/models'
import type { User } from '@libs/core/models'

const MOCKED_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImtldmluIiwiZW1haWwiOiJrZXZpbkBrb2ZmaS5mciIsImlhdCI6MTUxNjIzOTAyMn0.WPcLbl-44ngDPECES6H6Vy6XpsG3r2DKBscuz2MJ1pM'
export namespace AloneApiRequest {
  export namespace Identity {
    export function register(request: RegisterRequestDTO): Promise<{ token: string }> {
      return Promise.resolve({ token: MOCKED_TOKEN })
    }

    export function fetchMe(token: string): Promise<{ user: User }> {
      return Promise.resolve({
        user: {
          email: 'kevin@tanoh.fr'
        }
      })
    }
  }
}
