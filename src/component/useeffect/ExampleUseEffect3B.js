import React, {useEffect, useState} from 'react';

const ExampleUseEffect3B = () => {
    const [avatar, setAvatar] = useState();

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        setAvatar(file)

        e.target.value = null;
    };

    useEffect(() => {
        // Cleanup function
        return () => avatar && URL.revokeObjectURL(avatar.preview);
    }, [avatar]);

    return (
        <div>
            <p><b>Tạo xem trước cho 1 bức ảnh được tải lên từ thiết bị</b></p>
            <input type="file" onChange={handlePreviewAvatar}/>
            {
                avatar && (<img src={avatar.preview} alt="" width='80%'/>)
            }
        </div>
    );
};

export default ExampleUseEffect3B;