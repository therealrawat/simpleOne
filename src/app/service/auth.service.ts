import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

//apis
  apiurl = 'http://localhost:3000/user'
  blogurl = 'http://localhost:3000/blog'
  publishedurl = 'http://localhost:3000/publishedblog'

  GetAll(){
    return this.http.get(this.apiurl);
  }
  GetByCode(code : any){
    return this.http.get(this.apiurl+'/'+code)
  }
  GetAllRole(){
    return this.http.get('http://localhost:3000/role')
  }
  
  ProceedRegister(data:any)
  {
    return this.http.post(this.apiurl,data)
  }
  UpdateUser(code:any, data:any)
  {
    console.warn(code);
    
    return this.http.put(this.apiurl+'/'+code, data)
  }

  IsLoggedIn()
  {
    return sessionStorage.getItem('username')!=null;
  }
  GetUserRole()
  {
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
  GetUserName()
  {
    return sessionStorage.getItem('name')!=null?sessionStorage.getItem('name')?.toString():'';
  }

  // Blogs

  GetAllBlogs(){
    return this.http.get(this.blogurl)
  }
  GetBlogByCode(code : any){
    return this.http.get(`${this.blogurl}/${code}`)
  }
  CreateBlog(data:any){
    return this.http.post(this.blogurl,data)
  }
  UpdateBlog(code:any, data:any)
  {
    console.warn(code);
    
    return this.http.put(this.blogurl+'/'+ code, data)
  }
  DeleteBlog(code:any)
  {
    return this.http.delete(`${this.blogurl}/${code}`)
  }

  //published blog
  GetAllPublishedBlog()
  {
    return this.http.get(this.publishedurl)
  }
  
  GetBlogStatus()
  {
    return this.http.get('http://localhost:3000/blogstatus')
  }
}
