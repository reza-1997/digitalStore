
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;


const BUCKET_NAME = 'images';
const FOLDER_NAME = 'brands';


const SUPABASE_IMAGE_URL = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${FOLDER_NAME}`;


export const getImageUrl = (imageName: string): string => {
    if (!imageName) return '';

    const cleanImageName = imageName.replace(/^\/+/, '');
    return `${SUPABASE_IMAGE_URL}/${cleanImageName}`;
};