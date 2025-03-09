import MyLogo from '@/app/ui/mylogo';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-[url('/img/bgGAOPO_blurred.jpg')] bg-cover">
            <header className="flex h-20 mt-6 mx-6 shrink-0 items-end rounded-lg bg-[#2ad7bd] p-4">
                <MyLogo />
                <b className="text-white text-sm">.made by Omin</b>
            </header>
            <main className="flex flex-wrap justify-center items-center flex-col p-6">
                {children}
            </main>
     
        </div>
    );
}
