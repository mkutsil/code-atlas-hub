import { renderHook } from '@testing-library/react';
import { useBreakpoint } from './useBreakpoint';

test('should return isMobile false by default', () => {
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current.isMobile).toBe(false);
});
