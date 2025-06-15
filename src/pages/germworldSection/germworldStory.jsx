import MetaBalls from "@/components/effects/metalBall"
import TextPressure from "@/components/effects/textPressure"

export default function GermWorldStory () {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div style={{position: 'relative', height: '500px'}}>
                <TextPressure
                    text="The_Germ_World!"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={100}
                />
            </div>



        </div>
    )
}