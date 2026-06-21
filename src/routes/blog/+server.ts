import apiConfig from "$lib/utils/apiConfig";
import type { Posts } from "../types";

export async function GET() {
    const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    console.log(result);

    if (result.status === 200) {
        return new Response(
            JSON.stringify({
                status: result.status,
                message: "Posts fetched successfully",
                data: result.data.sort(
                    (a: Posts, b: Posts) => new Date(b.date).getTime() - new Date(a.date).getTime()
                ),
                error: ""
            }),
            {
                status: 200,
            }
        );
    } else {
        return new Response(
            JSON.stringify({
                status: result.status,
                error: "",
                message: "Something went wrong",
                data: null
            }),
            {
                status: result.status,
            }
        );
    }
};