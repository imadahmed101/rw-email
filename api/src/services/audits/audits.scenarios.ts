import type { Prisma, Audit } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AuditCreateArgs>({
  audit: {
    one: {
      data: { log: 'String', user: { create: { email: 'String6305757' } } },
    },
    two: {
      data: { log: 'String', user: { create: { email: 'String2264763' } } },
    },
  },
})

export type StandardScenario = ScenarioData<Audit, 'audit'>
