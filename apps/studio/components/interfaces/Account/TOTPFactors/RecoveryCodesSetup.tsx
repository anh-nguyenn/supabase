import { RectangleEllipsisIcon } from 'lucide-react'
import { EmptyStatePresentational } from 'ui-patterns/EmptyStatePresentational'

import { GenerateRecoveryCodesModal } from './GenerateRecoveryCodesModal'

export const RecoveryCodesSetup = ({ isPrimary }: { isPrimary: boolean }) => (
  <EmptyStatePresentational
    icon={RectangleEllipsisIcon}
    title="Set up recovery codes"
    description="Save a backup way to sign in if you lose your authenticator."
  >
    <GenerateRecoveryCodesModal variant={isPrimary ? 'primary' : 'default'} />
  </EmptyStatePresentational>
)
