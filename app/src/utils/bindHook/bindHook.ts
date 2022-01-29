import { VFC } from 'react';
import { createElement, memo } from 'react';

type HookType<HookProps, HookResult> = (props: HookProps) => HookResult;

type Options = {
  displayName?: string;
};

/**
 * 훅과 컴포넌트를 연결시켜주는 유틸입니다.
 * 컴포넌트에 로직 또는 훅이 있는 경우에 사용하면 됩니다.
 * 컴포넌트는 단순 데이터를 받아 보여주는 용도로만 사용해주세요.
 * @param useHook
 * @param ViewComponent
 * @param options
 * @returns 훅의 결과데이터가 바인딩된 컴포넌트
 */
export const bindHook = <HookProps extends Record<string, unknown>, HookResult>(
  useHook: HookType<HookProps, HookResult>,
  ViewComponent: VFC<HookResult>,
  options?: Options
) => {
  const { displayName } = options ?? {};

  const MemoizedViewComponent = memo(ViewComponent) as unknown as VFC<HookResult>;

  const Component = memo<HookProps>(props =>
    createElement(MemoizedViewComponent, useHook(props))
  ) as unknown as VFC<HookProps>;

  if (displayName) {
    Component.displayName = displayName;
  }

  return Component;
};
