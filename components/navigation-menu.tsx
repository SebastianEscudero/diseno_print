"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export function NavigationMenuLanding() {

    const pathname = usePathname();

    return (
        <NavigationMenu className="hidden lg:flex lg:flex-col">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href={"/productos"}
                    >
                        <Button
                            className='justify-start my-[3px] text-[16px] mr-2 ml-2'
                            variant={pathname === "/productos" ? 'default' : 'ghost'}
                        >
                            Productos
                        </Button>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        href={"/about-us"}
                    >
                        <Button
                            className='justify-start my-[3px] text-[16px] mr-2'
                            variant={pathname === "/about-us" ? 'default' : 'ghost'}
                        >
                            ¿Quienés somos?
                        </Button>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        href={"/faq"}
                    >
                        <Button
                            className='justify-start my-[3px] text-[16px]'
                            variant={pathname === "/faq" ? 'default' : 'ghost'}
                        >
                            Preguntas frecuentes
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:underline",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"