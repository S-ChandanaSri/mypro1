export function isLocal(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === "local"
  );
}

export function isStaging(): boolean {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === "staging";
}

export function isProduction(): boolean {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
}
