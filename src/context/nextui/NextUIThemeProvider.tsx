'use client';

import { NextUIProvider } from '@nextui-org/react';

export function NextUIThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
