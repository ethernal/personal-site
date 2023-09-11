'use client';
import { MotionConfig } from 'framer-motion';
import React, { ReactNode } from 'react';

type MotionPreferencesConfigProps = {
	children: ReactNode;
};

function MotionPreferencesConfig({ children }: MotionPreferencesConfigProps) {
	return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default MotionPreferencesConfig;
