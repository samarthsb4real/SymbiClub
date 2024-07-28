import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
export default function Topbar() {
    return (
        <nav className="topbar shadow-emerald-50">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/favicon.ico" alt="logo" className="rounded-full" width={28} height={28} />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">SymbiClub</p>
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image src="/assets/logout.svg"
                                    alt="logout"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger:
                                "py-2 px-4"
                        }
                    }}
                />

            </div>
        </nav>
    )
}