export const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
      <div className="flex flex-col h-full items-center justify-center min-h-screen min-w-screen">
          {children}
      </div>
    );
  }
  