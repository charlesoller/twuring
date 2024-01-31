// Types
import { ReactNode } from "react";
import { Button } from "@nextui-org/react";

export function MenuItem({ icon, children, active, tooltip }: { icon: ReactNode, children: string, active: boolean, tooltip: string }){
    return (
        <Button className={`flex bg-transparent justify-start hover:bg-blue-600 gap-3 p-4 w-full rounded-xl`}>
            <span className="w-5 h-5">
                { icon }
            </span>
            <span className="text-lg">
                { children }
            </span>
        </Button>
    )
}
