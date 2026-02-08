import { ref } from 'vue'
import type { Image } from '@/App.vue'

const imgs = ref<Image[]>([
    {id: 0, name: "image0", url: "src/u.jpeg"},
    {id: 1, name: "image1", url: "src/d.jpeg"},
    {id: 2, name: "image2", url: "src/t.jpeg"},
    {id: 3, name: "image3", url: "src/q.jpeg"},
    {id: 4, name: "image4", url: "src/c.jpg"}
])

export function useImages() {
    return { imgs }
}