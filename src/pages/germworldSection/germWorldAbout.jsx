import AnimatedContent from "@/components/effects/animatedContent";

export default function GermWorldAbout () {
    return (
        <div className="flex flex-col text-white items-center justify-center w-full h-screen p-12 mt-6">
            <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
            >
                <p className="text-min-md">
                    Quis deserunt cupidatat laborum fugiat non voluptate. Adipisicing cupidatat ullamco dolor commodo non ipsum ea incididunt irure exercitation. Sint tempor eiusmod quis laboris nostrud incididunt adipisicing cupidatat reprehenderit do dolor et.
                     Quis deserunt cupidatat laborum fugiat non voluptate. Adipisicing cupidatat ullamco dolor commodo non ipsum ea incididunt irure exercitation. Sint tempor eiusmod quis laboris nostrud incididunt adipisicing cupidatat reprehenderit do dolor et.
                </p>
                <p className="text-min-md">
                    Quis deserunt cupidatat laborum fugiat non voluptate. Adipisicing cupidatat ullamco dolor commodo non ipsum ea incididunt irure exercitation. Sint tempor eiusmod quis laboris nostrud incididunt adipisicing cupidatat reprehenderit do dolor et.
                </p>
            </AnimatedContent>
        </div>
    )
}