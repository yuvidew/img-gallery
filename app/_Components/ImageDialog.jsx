import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'


export const ImageDialog = ({
    src ,
    alt,
}) => {

    return (
        <Dialog>
        <DialogTrigger>
            <Image
                className="w-full mb-2"  // Tailwind CSS classes
                src={src}                // Image source
                alt={alt}                // Alt text
                layout="responsive"      // Responsive layout
                width={16}               // Aspect ratio: width
                height={9}  
            />
        </DialogTrigger>
        <DialogContent className = "  ">
            <DialogHeader className={"h-full "}>
            <DialogTitle>{alt}</DialogTitle>
                <DialogDescription className = "h-full flex items-center justify-center">
                    <Image 
                        className="w-full mb-2"  // Tailwind CSS classes
                        src={src}                // Image source
                        alt={alt}                // Alt text
                        layout="responsive"      // Responsive layout
                        width={16}               // Aspect ratio: width
                        height={9}  
                    />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}
