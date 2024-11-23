enum WritingArticleType  {
    EXPOSITORY = 'EXPOSITORY',
    PERSUASIVE = 'PERSUASIVE',
    NARRATIVE = 'NARRATIVE',
    DESCRIPTIVE = 'DESCRIPTIVE'
}
type WritingArticleTypeKeys = keyof typeof WritingArticleType;

type WritingArticleTypeData = {
    title: string;
    subtitle?: string;
    [key: string]: any
}

const articlesObjectData: 
    { [key in WritingArticleTypeKeys]: WritingArticleTypeData } = 
    {
        "EXPOSITORY": { title: "EXPOSITORY_TITLE" },
        "PERSUASIVE": { title: "PERSUASIVE_TITLE" },
        "NARRATIVE":  { title: "NARRATIVE_TITLE" },  
        "DESCRIPTIVE": { title: "DESCRIPTIVE_TITLE" } 
    };

console.log('object: ', articlesObjectData);

const articlesMapData: 
    Map<WritingArticleTypeKeys, WritingArticleTypeData> = 
    new Map<WritingArticleTypeKeys, WritingArticleTypeData>([
        ["EXPOSITORY", articlesObjectData.EXPOSITORY],
        // ["PERSUASIVE", articlesObjectData.PERSUASIVE],
        ["NARRATIVE", articlesObjectData.NARRATIVE],
        // ["DESCRIPTIVE", articlesObjectData.DESCRIPTIVE],
    ]);

console.log('map: ', articlesMapData.get("EXPOSITORY"));
// { "title": "EXPOSITORY_TITLE" } 
console.log('map: ', articlesMapData.get("NARRATIVE"));
