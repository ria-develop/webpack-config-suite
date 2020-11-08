import {
  CacheThreadRule,
  CssLoaderOptions,
  ExtractCssLoaderOptions,
  getLoader,
  PostCssLoaderOptions,
  StyleLoaderOptions,
  What
} from '@webpack-config-suite/core';
import {CssExtension, CssPlugins} from './index';
import {RuleSetUseItem} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export class CssConfig extends CacheThreadRule {
  public get composed(): What[] {
    return [CssExtension, CssPlugins];
  }

  protected get test(): RegExp | string {
    return /\.css/;
  }

  protected get cssLoaderOptions(): CssLoaderOptions {
    return {sourceMap: this.isDev};
  }

  protected get cssLoader(): RuleSetUseItem {
    return getLoader('css-loader', this.cssLoaderOptions);
  }

  protected get styleLoaderOptions(): StyleLoaderOptions {
    return null;
  }

  protected get styleLoader(): RuleSetUseItem {
    return getLoader('style-loader', this.styleLoaderOptions);
  }

  protected get postCssLoaderOptions(): PostCssLoaderOptions {
    return {
      postcssOptions: {
        plugins: [['autoprefixer']]
      }
    };
  }

  protected get postCssLoader(): RuleSetUseItem {
    return getLoader('postcss-loader', this.postCssLoaderOptions);
  }

  protected get extractCssLoaderOptions(): ExtractCssLoaderOptions {
    return {
      esModule: false
    };
  }

  protected get extractCssLoader(): RuleSetUseItem {
    return getLoader(MiniCssExtractPlugin.loader, this.extractCssLoaderOptions);
  }

  /**
   *
   * @returns {[]}
   */
  protected get use(): RuleSetUseItem[] {
    return [this.styleLoader, this.extractCssLoader, this.cssLoader, this.postCssLoader];
  }
}
