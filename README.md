## A react hook for watching device connectivity status

### Usage

```tsx

import type { FC } from 'react'
import { useOnline } from '@saulpalv/useonline'

export const DialogNetwork: FC = ()=> {

    const isOnline = useOnline()

    return (
        <Dialog show={!isOnline}>
            You are not online
        </Dialog >
    )
})
```
