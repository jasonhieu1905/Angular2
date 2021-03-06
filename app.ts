import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
    selector: 'reddit',
    template: `
        <form class="ui large form segment"> 
             <h3 class="ui header">Add a Link</h3>   
             <div class="field">  
                <label for="title">Title:</label> 
                <input name="title" #newtitle>  
            </div>  
            <div class="field">  
                <label for="link">Link:</label>  
                <input name="link" #newlink>  
            </div>  
            <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button"> 
              Submit link
            </button>
        </form> 
    `
})
class RedditApp {
    names: string[]; 
    constructor(){
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; 
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {  
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);  
        return false;  
    } 
}
@NgModule({ 
    declarations: [RedditApp ], 
    imports: [BrowserModule], 
    bootstrap: [RedditApp], 
}) 
class HelloWorldAppModule {}
platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);

