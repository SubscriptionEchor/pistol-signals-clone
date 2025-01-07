```tsx
export function AuthDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-800"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-black text-gray-500">or continue with email</span>
      </div>
    </div>
  );
}
```