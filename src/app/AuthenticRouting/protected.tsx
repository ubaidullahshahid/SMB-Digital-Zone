import { useRouter } from "next/navigation";
import { useEffect, ComponentType, JSX } from "react";
import { useSelector } from "@/store/store";
import { RootState } from "@/store/store";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function ProtectedRoute(WrappedComponent: ComponentType) {
  const ComponentWithAuth = () => {
    const { user, userLoading } = useSelector(
      (state: RootState) => state.currentUser
    );
    const router = useRouter();

    useEffect(() => {
      if (!user?.email && !userLoading) {
        router.push("/signin");
      }
    }, [user, userLoading, router]);

    if (!user?.email && userLoading) return <div>Loading...</div>;

    return (
      <>
        <Header />
        <WrappedComponent />
        <Footer />
      </>
    );
  };

  return ComponentWithAuth;
}

export default ProtectedRoute;
