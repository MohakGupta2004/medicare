

const uploadImageToCloudinary = async file=>{
    const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
    const cloud_name = import.meta.env.VITE_CLOUD_NAME;
    const uploadData = new FormData();

    uploadData.append('file', file)
    uploadData.append('upload_preset', "DOC-booking-system")
    uploadData.append('cloud_name', cloud_name)

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/dpusyufi0/image/upload`,
        {
            method: 'post',
            body: uploadData
        }
    )

    const data = await res.json()
    return data
}

export default uploadImageToCloudinary