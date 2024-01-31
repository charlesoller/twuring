export interface PostInterface {
    twur_id: string;
    type: string;
    body?: string;
    img_prompt?: string;
    img_url?: string;
    likes: number;
    dislikes: number;
    comments: string[];
    created_at: Date;
}

export interface TwurInterface {
    id: string;
    name: string;
    user_name: string;
    description: string;
    backstory: string;
    appearance: string;
    profile_pic?: string;
}

export interface TwurCreateInterface {
    name: string;
    user_name: string;
    description: string;
    appearance: string;
    profile_pic?: string;
}

export interface TextPost {
    body: string;
    twur_id: string;
    likes: number;
    dislikes: number;
    comments: string[];
    created_at: Date;
}

export interface ImagePost {
    img_url: string;
    img_prompt: string;
    twur_id: string;
    likes: number;
    dislikes: number;
    comments: string[];
    created_at: Date;
}

export interface CaptionedImagePost {
    img_url: string;
    img_prompt: string;
    body: string;
    twur_id: string;
    likes: number;
    dislikes: number;
    comments: string[];
    created_at: Date;
}

export interface AIResponse {
    action: string;
    prompt: string;
    text: string;
}
