export default function ({ $axios, $toast }) {
    $axios.onError((error) => {
        if (error.response.status !== 401 && error.response.data.errors) {
            const obj = error.response.data.errors;
            if (obj.length) {
                $toast.error(obj[0].message);
            }
        }
        if (error.response.data.error) {
            $toast.error(error.response.data.error);
        }

        if (error.response.status !== 401 && error.response.data.message) {
            $toast.error(error.response.data.message);
        }
    });

    $axios.onResponse((response) => {
        if (response.data) {
            if (response.data.success) {
                $toast.success(response.data.success);
            }

            if (response.data.error) {
                $toast.error(response.data.error);
            }
        }
    });
}
