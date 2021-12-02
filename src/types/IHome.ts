interface IHome {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: IComments[] | [];
}

interface IComments {
    id: number;
    rating: number;
    comment: string;
    author: string;
    date: string;
}

export default IHome;