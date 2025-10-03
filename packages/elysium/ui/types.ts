import type { SxProps, Theme } from '@mui/material/styles';

type InferSystemStyleObject<S, T = object> =
  S extends ReadonlyArray<unknown> ? never
  : S extends (theme: T) => unknown ? never
  : S;

export type SystemStyleObject<T extends object> = InferSystemStyleObject<
  SxProps<T>,
  T
>;

export { SxProps, Theme };
export type SxArray<TTheme extends Theme = Theme> = ReadonlyArray<
  SystemStyleObject<TTheme> | ((theme: TTheme) => SystemStyleObject<TTheme>)
>;

export type InferSlotsFromSlotProps<TSlotProps extends object> = {
  [key in keyof TSlotProps]: React.FC<Exclude<TSlotProps[key], undefined>>;
};
