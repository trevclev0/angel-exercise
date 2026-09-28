type WelcomeBannerProps = {
  name?: string;
};

export function WelcomeBanner({ name = 'Interviewer' }: WelcomeBannerProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <h1 className="text-6xl dark:text-white">Welcome {name}</h1>
    </div>
  );
}
