import { CSSInterpolation } from "@emotion/css";
import { PropsWithChildren } from "react";
/**
 * Represents a styled component.
 *
 * @remarks
 * The `StyledComponent` type is used to define components that can be styled using CSS.
 *
 * @public
 */
export type StyledComponent = {
    sx?: CSSInterpolation;
} & PropsWithChildren;
//# sourceMappingURL=types.d.ts.map