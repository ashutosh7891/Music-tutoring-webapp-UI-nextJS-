'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn"
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Link href= {'/'}>
        <Menu setActive={setActive}>
            
            <MenuItem setActive={setActive} active={active} item="home">
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="our courses">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All courses</HoveredLink>
                <HoveredLink href="/courses">DSA</HoveredLink>
                <HoveredLink href="/courses">Basic to mastery frontend</HoveredLink>
                <HoveredLink href="/courses">Basic to mastery Backend</HoveredLink>
                <HoveredLink href="/courses">Production grade projects</HoveredLink>
                </div>
            </MenuItem>
            <Link href = {'/signup'}>
            <MenuItem setActive={setActive} active={active} item="Sign up">
                
            </MenuItem>
            </Link>
            
        </Menu>
        </Link>
    </div>
  )
}

export default Navbar