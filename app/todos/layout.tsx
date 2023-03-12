import TodosList from "./TodosList"
import React from "react"
export default function RootLayout({
    children,
 }: {
     children: React.ReactNode  
}) {
    return ( 
        <main>
            <div>
                {/* @ts-ignore  */}
                <TodosList />
            </div>
            <div className="flex-1">{children}</div>
        </main>
    )
}