export interface INotice{
    convert_content : string
    notice : INoticeBase
}

export interface INoticeBase {
    date : string,
    content : string,
    title : string
}