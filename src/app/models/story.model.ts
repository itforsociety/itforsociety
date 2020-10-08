export class Story {
    story_id: number;
    story_custom: boolean;
	
	story_title: string;
	story_subtitle: string;

	story_avatar: string;
	story_image: string;
	story_og_image: string;

	story_content: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{  
			Object.assign(this, obj);
		}
	}
}
