import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    const viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['title'] = 'About Us - Online Store';
    viewData['subtitle'] = 'About Us';
    viewData['description'] = 'This is the about page...';
    viewData['author'] = 'Developed by: Aaron Dudue';

    return {
      viewData,
    };
  }
}
