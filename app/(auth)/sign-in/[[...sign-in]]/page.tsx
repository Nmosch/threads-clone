import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <h1>SignIn</h1>
      <SignIn />
    </div>
  );
}