export default function Footer(){

    return(
        <footer className="bg-slate-800 flex w-full h-24 md:h-48">
            <img className="absolute h-24 md:h-48 pt-5 opacity-65"  src="images/Mapache_footer.png"/>

            <div className="mx-auto my-auto space-y-3">
                <p className="text-white text-3xl md:text-4xl font-medium acm flex justify-center">
                    <img src='images/logos/ACM_logo_CW.png' className='h-8 md:h-10 mr-2 '/>
                    ACM
                </p>
                <p className="text-white text-xs md:text-base">© 2024 ACM™ All Rights Reserved.</p>
            </div>
        </footer>
    );
}