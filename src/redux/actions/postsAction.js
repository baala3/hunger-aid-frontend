import {
    CREATE_POST,
    LOAD_POSTS,
    UPDATE_POST,
    DELETE_POST,
    ERROR,
    UP_VOTE
} from '../actionTypes';
import axios from 'axios'

export const LoadPosts = (onSuccess) => {
    return async (dispatch, getState) => {
        try {
            const posts = await axios.get('https://hunger-aid-backend.vercel.app/api/post/allposts');
            dispatch({ type: LOAD_POSTS, payload: posts.data });
            onSuccess();
        } catch (err) {
            dispatch({ type: ERROR, payload: err.response })
        }
    }
}

export const CreatePosts = (images, sdata, eraserData) => {
    return async (dispatch, getState) => {

        try {
            const imgUrls = [];
            images.map(async (image) => {
                const data = new FormData();
                data.append('file', image);
                data.append('upload_preset', "SocialMedia");
                data.append('cloud_name', "djqrcbjmu");
                const data1 = await fetch("https://api.cloudinary.com/v1_1/djqrcbjmu/image/upload", {
                    method: "post",
                    body: data
                });
                const data2 = await data1.json();
                const url = await data2.secure_url;
                imgUrls.push(url);
                if (imgUrls.length === images.length) {

                    sdata['images'] = imgUrls;

                    const fulladdress = sdata['country'] + ',' + sdata['city'] + ',' + sdata['address'];
                    // Using Nominatim (OpenStreetMap) - Free, no API key required
                    const getLatLangFromAddress = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fulladdress)}&limit=1`);
                    
                    if (getLatLangFromAddress.data.length === 0) {
                        throw new Error('Address not found');
                    }
                    
                    const lat = getLatLangFromAddress.data[0].lat;
                    const lng = getLatLangFromAddress.data[0].lon;

                    sdata['lat'] = lat;
                    sdata['lon'] = lng;

                    const upload = await axios.post('https://hunger-aid-backend.vercel.app/api/post/addpost', sdata, {
                        headers: {
                            'authentication': localStorage.getItem('token')
                        }
                    });

                    dispatch({ type: CREATE_POST, payload: upload.data })

                    eraserData();


                }

            });

        } catch (err) {
            console.log(err.message);
            eraserData();

        }
    }
}

export const UpdatePost = (id, pi, images, sdata, eraserData) => {
    return async (dispatch, getState) => {

        try {

            const imgUrls = [];


            images.map(async (image) => {
                if (typeof image === String) {
                    imgUrls.push(image)
                }
                else {
                    const data = new FormData();
                    data.append('file', image);
                    data.append('upload_preset', "SocialMedia");
                    data.append('cloud_name', "djqrcbjmu");
                    const data1 = await fetch("	https://api.cloudinary.com/v1_1/djqrcbjmu/image/upload", {
                        method: "post",
                        body: data
                    });
                    const data2 = await data1.json();
                    const url = await data2.secure_url;
                    imgUrls.push(url);

                }
                if (imgUrls.length === images.length) {
                    sdata['images'] = imgUrls;
                    const upload = await axios.put(`https://hunger-aid-backend.vercel.app/api/post/${id}`, sdata, {
                        headers: {
                            'authentication': localStorage.getItem('token')
                        }
                    });

                    dispatch({ type: UPDATE_POST, payload: upload.data })

                    eraserData();


                }

            });

        } catch (err) {
            console.log(err.message);
            eraserData();

        }
    }
}


export const DeletePost = (id) => {
    return async (dispatch, getState) => {

        try {
            const status = await axios.delete(`https://hunger-aid-backend.vercel.app/api/post/${id}`, {
                headers: {
                    'authentication': localStorage.getItem('token')

                }
            });
            dispatch({
                type: DELETE_POST,
                payload: status.data
            });
        }
        catch (err) {
            console.error('Error deleting post:', err);
            dispatch({ type: ERROR, payload: err.response || err.message });
        }

    }
}
export const upVote = (postId, currentUserId) => {
    return async (dispatch, getState) => {
        try {
            await axios.post('https://hunger-aid-backend.vercel.app/api/post/switchvote', { id: postId }, {
                headers: {
                    'authentication': localStorage.getItem('token')

                }
            });
            dispatch({ type: UP_VOTE, payload: { postId, currentUserId } });

        }
        catch (err) {
            console.error('Error voting on post:', err);
            dispatch({ type: ERROR, payload: err.response || err.message });
        }



    }
}