import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC = 'IS_PUBLIC';
export default function IsPublic() {
  return SetMetadata(IS_PUBLIC, true);
}
