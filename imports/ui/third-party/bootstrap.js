import React, { Component } from 'react';

export default class bootstrap extends Component {
  render() {
    const nbsp = '\u00A0';

    return (
      <style dangerouslySetInnerHTML={{__html: `
        @import url("//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
        @import url("//fonts.googleapis.com/css?family=Lato:400,700,400italic");

        /*!
         * Bootswatch v3.1.1
         * Homepage: http://bootswatch.com
         * Copyright 2012-2014 Thomas Park
         * Licensed under MIT
         * Based on Bootstrap
        */
        /*! normalize.css v3.0.0 | MIT License | git.io/normalize */
        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        body {
          margin: 0;
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section,
        summary {
          display: block;
        }

        audio,
        canvas,
        progress,
        video {
          display: inline-block;
          vertical-align: baseline;
        }

        audio:not([controls]) {
          display: none;
          height: 0;
        }

        [hidden],
        template {
          display: none;
        }

        a {
          background: transparent;
        }

        a:active,
        a:hover {
          outline: 0;
        }

        abbr[title] {
          border-bottom: 1px dotted;
        }

        b,
        strong {
          font-weight: bold;
        }

        dfn {
          font-style: italic;
        }

        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }

        mark {
          background: #ff0;
          color: #000;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sup {
          top: -0.5em;
        }

        sub {
          bottom: -0.25em;
        }

        img {
          border: 0;
        }

        svg:not(:root) {
          overflow: hidden;
        }

        figure {
          margin: 1em 40px;
        }

        hr {
          -moz-box-sizing: content-box;
          box-sizing: content-box;
          height: 0;
        }

        pre {
          overflow: auto;
        }

        code,
        kbd,
        pre,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          color: inherit;
          font: inherit;
          margin: 0;
        }

        button {
          overflow: visible;
        }

        button,
        select {
          text-transform: none;
        }

        button,
        html input[type="button"],
        input[type="reset"],
        input[type="submit"] {
          -webkit-appearance: button;
          cursor: pointer;
        }

        button[disabled],
        html input[disabled] {
          cursor: default;
        }

        button::-moz-focus-inner,
        input::-moz-focus-inner {
          border: 0;
          padding: 0;
        }

        input {
          line-height: normal;
        }

        input[type="checkbox"],
        input[type="radio"] {
          box-sizing: border-box;
          padding: 0;
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          height: auto;
        }

        input[type="search"] {
          -webkit-appearance: textfield;
          -moz-box-sizing: content-box;
          -webkit-box-sizing: content-box;
          box-sizing: content-box;
        }

        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        fieldset {
          border: 1px solid #c0c0c0;
          margin: 0 2px;
          padding: 0.35em 0.625em 0.75em;
        }

        legend {
          border: 0;
          padding: 0;
        }

        textarea {
          overflow: auto;
        }

        optgroup {
          font-weight: bold;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        td,
        th {
          padding: 0;
        }

        @media print {
          * {
            text-shadow: none !important;
            color: #000 !important;
            background: transparent !important;
            box-shadow: none !important;
          }

          a,
          a:visited {
            text-decoration: underline;
          }

          a[href]:after {
            content: " (" attr(href) ")";
          }

          abbr[title]:after {
            content: " (" attr(title) ")";
          }

          a[href^="javascript:"]:after,
          a[href^="#"]:after {
            content: "";
          }

          pre,
          blockquote {
            border: 1px solid #999;
            page-break-inside: avoid;
          }

          thead {
            display: table-header-group;
          }

          tr,
          img {
            page-break-inside: avoid;
          }

          img {
            max-width: 100% !important;
          }

          p,
          h2,
          h3 {
            orphans: 3;
            widows: 3;
          }

          h2,
          h3 {
            page-break-after: avoid;
          }

          select {
            background: #fff !important;
          }

          .navbar {
            display: none;
          }

          .table td,
          .table th {
            background-color: #fff !important;
          }

          .btn > .caret,
          .dropup > .btn > .caret {
            border-top-color: #000 !important;
          }

          .label {
            border: 1px solid #000;
          }

          .table {
            border-collapse: collapse !important;
          }

          .table-bordered th,
          .table-bordered td {
            border: 1px solid #ddd !important;
          }
        }

        * {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        *:before,
        *:after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        body {
          font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 15px;
          line-height: 1.42857143;
          color: #2c3e50;
          background-color: #ffffff;
        }

        input,
        button,
        select,
        textarea {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        a {
          color: #18bc9c;
          text-decoration: none;
        }

        a:hover,
        a:focus {
          color: #18bc9c;
          text-decoration: underline;
        }

        a:focus {
          outline: thin dotted;
          outline: 5px auto -webkit-focus-ring-color;
          outline-offset: -2px;
        }

        figure {
          margin: 0;
        }

        img {
          vertical-align: middle;
        }

        .img-responsive,
        .thumbnail > img,
        .thumbnail a > img,
        .carousel-inner > .item > img,
        .carousel-inner > .item > a > img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .img-rounded {
          border-radius: 6px;
        }

        .img-thumbnail {
          padding: 4px;
          line-height: 1.42857143;
          background-color: #ffffff;
          border: 1px solid #ecf0f1;
          border-radius: 4px;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          display: inline-block;
          max-width: 100%;
          height: auto;
        }

        .img-circle {
          border-radius: 50%;
        }

        hr {
          margin-top: 21px;
          margin-bottom: 21px;
          border: 0;
          border-top: 1px solid #ecf0f1;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6 {
          font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: 400;
          line-height: 1.1;
          color: inherit;
        }

        h1 small,
        h2 small,
        h3 small,
        h4 small,
        h5 small,
        h6 small,
        .h1 small,
        .h2 small,
        .h3 small,
        .h4 small,
        .h5 small,
        .h6 small,
        h1 .small,
        h2 .small,
        h3 .small,
        h4 .small,
        h5 .small,
        h6 .small,
        .h1 .small,
        .h2 .small,
        .h3 .small,
        .h4 .small,
        .h5 .small,
        .h6 .small {
          font-weight: normal;
          line-height: 1;
          color: #b4bcc2;
        }

        h1,
        .h1,
        h2,
        .h2,
        h3,
        .h3 {
          margin-top: 21px;
          margin-bottom: 10.5px;
        }

        h1 small,
        .h1 small,
        h2 small,
        .h2 small,
        h3 small,
        .h3 small,
        h1 .small,
        .h1 .small,
        h2 .small,
        .h2 .small,
        h3 .small,
        .h3 .small {
          font-size: 65%;
        }

        h4,
        .h4,
        h5,
        .h5,
        h6,
        .h6 {
          margin-top: 10.5px;
          margin-bottom: 10.5px;
        }

        h4 small,
        .h4 small,
        h5 small,
        .h5 small,
        h6 small,
        .h6 small,
        h4 .small,
        .h4 .small,
        h5 .small,
        .h5 .small,
        h6 .small,
        .h6 .small {
          font-size: 75%;
        }

        h1,
        .h1 {
          font-size: 39px;
        }

        h2,
        .h2 {
          font-size: 32px;
        }

        h3,
        .h3 {
          font-size: 26px;
        }

        h4,
        .h4 {
          font-size: 19px;
        }

        h5,
        .h5 {
          font-size: 15px;
        }

        h6,
        .h6 {
          font-size: 13px;
        }

        p {
          margin: 0 0 10.5px;
        }

        .lead {
          margin-bottom: 21px;
          font-size: 17px;
          font-weight: 200;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .lead {
            font-size: 22.5px;
          }
        }

        small,
        .small {
          font-size: 85%;
        }

        cite {
          font-style: normal;
        }

        .text-left {
          text-align: left;
        }

        .text-right {
          text-align: right;
        }

        .text-center {
          text-align: center;
        }

        .text-justify {
          text-align: justify;
        }

        .text-muted {
          color: #b4bcc2;
        }

        .text-primary {
          color: #2c3e50;
        }

        a.text-primary:hover {
          color: #1a242f;
        }

        .text-success {
          color: #ffffff;
        }

        a.text-success:hover {
          color: #e6e6e6;
        }

        .text-info {
          color: #ffffff;
        }

        a.text-info:hover {
          color: #e6e6e6;
        }

        .text-warning {
          color: #ffffff;
        }

        a.text-warning:hover {
          color: #e6e6e6;
        }

        .text-danger {
          color: #ffffff;
        }

        a.text-danger:hover {
          color: #e6e6e6;
        }

        .bg-primary {
          color: #fff;
          background-color: #2c3e50;
        }

        a.bg-primary:hover {
          background-color: #1a242f;
        }

        .bg-success {
          background-color: #18bc9c;
        }

        a.bg-success:hover {
          background-color: #128f76;
        }

        .bg-info {
          background-color: #3498db;
        }

        a.bg-info:hover {
          background-color: #217dbb;
        }

        .bg-warning {
          background-color: #f39c12;
        }

        a.bg-warning:hover {
          background-color: #c87f0a;
        }

        .bg-danger {
          background-color: #e74c3c;
        }

        a.bg-danger:hover {
          background-color: #d62c1a;
        }

        .page-header {
          padding-bottom: 9.5px;
          margin: 42px 0 21px;
          border-bottom: 1px solid #ecf0f1;
        }

        ul,
        ol {
          margin-top: 0;
          margin-bottom: 10.5px;
        }

        ul ul,
        ol ul,
        ul ol,
        ol ol {
          margin-bottom: 0;
        }

        .list-unstyled {
          padding-left: 0;
          list-style: none;
        }

        .list-inline {
          padding-left: 0;
          list-style: none;
          margin-left: -5px;
        }

        .list-inline > li {
          display: inline-block;
          padding-left: 5px;
          padding-right: 5px;
        }

        dl {
          margin-top: 0;
          margin-bottom: 21px;
        }

        dt,
        dd {
          line-height: 1.42857143;
        }

        dt {
          font-weight: bold;
        }

        dd {
          margin-left: 0;
        }

        @media (min-width: 768px) {
          .dl-horizontal dt {
            float: left;
            width: 160px;
            clear: left;
            text-align: right;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .dl-horizontal dd {
            margin-left: 180px;
          }
        }

        abbr[title],
        abbr[data-original-title] {
          cursor: help;
          border-bottom: 1px dotted #b4bcc2;
        }

        .initialism {
          font-size: 90%;
          text-transform: uppercase;
        }

        blockquote {
          padding: 10.5px 21px;
          margin: 0 0 21px;
          font-size: 18.75px;
          border-left: 5px solid #ecf0f1;
        }

        blockquote p:last-child,
        blockquote ul:last-child,
        blockquote ol:last-child {
          margin-bottom: 0;
        }

        blockquote footer,
        blockquote small,
        blockquote .small {
          display: block;
          font-size: 80%;
          line-height: 1.42857143;
          color: #b4bcc2;
        }

        blockquote footer:before,
        blockquote small:before,
        blockquote .small:before {
          content: '\\2014 \\00A0';
        }

        .blockquote-reverse,
        blockquote.pull-right {
          padding-right: 15px;
          padding-left: 0;
          border-right: 5px solid #ecf0f1;
          border-left: 0;
          text-align: right;
        }

        .blockquote-reverse footer:before,
        blockquote.pull-right footer:before,
        .blockquote-reverse small:before,
        blockquote.pull-right small:before,
        .blockquote-reverse .small:before,
        blockquote.pull-right .small:before {
          content: '';
        }

        .blockquote-reverse footer:after,
        blockquote.pull-right footer:after,
        .blockquote-reverse small:after,
        blockquote.pull-right small:after,
        .blockquote-reverse .small:after,
        blockquote.pull-right .small:after {
          content: '\\00A0 \\2014';
        }

        blockquote:before,
        blockquote:after {
          content: "";
        }

        address {
          margin-bottom: 21px;
          font-style: normal;
          line-height: 1.42857143;
        }

        code,
        kbd,
        pre,
        samp {
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        }

        code {
          padding: 2px 4px;
          font-size: 90%;
          color: #c7254e;
          background-color: #f9f2f4;
          white-space: nowrap;
          border-radius: 4px;
        }

        kbd {
          padding: 2px 4px;
          font-size: 90%;
          color: #ffffff;
          background-color: #333333;
          border-radius: 3px;
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
        }

        pre {
          display: block;
          padding: 10px;
          margin: 0 0 10.5px;
          font-size: 14px;
          line-height: 1.42857143;
          word-break: break-all;
          word-wrap: break-word;
          color: #7b8a8b;
          background-color: #ecf0f1;
          border: 1px solid #cccccc;
          border-radius: 4px;
        }

        pre code {
          padding: 0;
          font-size: inherit;
          color: inherit;
          white-space: pre-wrap;
          background-color: transparent;
          border-radius: 0;
        }

        .pre-scrollable {
          max-height: 340px;
          overflow-y: scroll;
        }

        .container {
          margin-right: auto;
          margin-left: auto;
          padding-left: 15px;
          padding-right: 15px;
        }

        @media (min-width: 768px) {
          .container {
            width: 750px;
          }
        }

        @media (min-width: 992px) {
          .container {
            width: 970px;
          }
        }

        @media (min-width: 1200px) {
          .container {
            width: 1170px;
          }
        }

        .container-fluid {
          margin-right: auto;
          margin-left: auto;
          padding-left: 15px;
          padding-right: 15px;
        }

        .row {
          margin-left: -15px;
          margin-right: -15px;
        }

        .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
          position: relative;
          min-height: 1px;
          padding-left: 15px;
          padding-right: 15px;
        }

        .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
          float: left;
        }

        .col-xs-12 {
          width: 100%;
        }

        .col-xs-11 {
          width: 91.66666667%;
        }

        .col-xs-10 {
          width: 83.33333333%;
        }

        .col-xs-9 {
          width: 75%;
        }

        .col-xs-8 {
          width: 66.66666667%;
        }

        .col-xs-7 {
          width: 58.33333333%;
        }

        .col-xs-6 {
          width: 50%;
        }

        .col-xs-5 {
          width: 41.66666667%;
        }

        .col-xs-4 {
          width: 33.33333333%;
        }

        .col-xs-3 {
          width: 25%;
        }

        .col-xs-2 {
          width: 16.66666667%;
        }

        .col-xs-1 {
          width: 8.33333333%;
        }

        .col-xs-pull-12 {
          right: 100%;
        }

        .col-xs-pull-11 {
          right: 91.66666667%;
        }

        .col-xs-pull-10 {
          right: 83.33333333%;
        }

        .col-xs-pull-9 {
          right: 75%;
        }

        .col-xs-pull-8 {
          right: 66.66666667%;
        }

        .col-xs-pull-7 {
          right: 58.33333333%;
        }

        .col-xs-pull-6 {
          right: 50%;
        }

        .col-xs-pull-5 {
          right: 41.66666667%;
        }

        .col-xs-pull-4 {
          right: 33.33333333%;
        }

        .col-xs-pull-3 {
          right: 25%;
        }

        .col-xs-pull-2 {
          right: 16.66666667%;
        }

        .col-xs-pull-1 {
          right: 8.33333333%;
        }

        .col-xs-pull-0 {
          right: 0%;
        }

        .col-xs-push-12 {
          left: 100%;
        }

        .col-xs-push-11 {
          left: 91.66666667%;
        }

        .col-xs-push-10 {
          left: 83.33333333%;
        }

        .col-xs-push-9 {
          left: 75%;
        }

        .col-xs-push-8 {
          left: 66.66666667%;
        }

        .col-xs-push-7 {
          left: 58.33333333%;
        }

        .col-xs-push-6 {
          left: 50%;
        }

        .col-xs-push-5 {
          left: 41.66666667%;
        }

        .col-xs-push-4 {
          left: 33.33333333%;
        }

        .col-xs-push-3 {
          left: 25%;
        }

        .col-xs-push-2 {
          left: 16.66666667%;
        }

        .col-xs-push-1 {
          left: 8.33333333%;
        }

        .col-xs-push-0 {
          left: 0%;
        }

        .col-xs-offset-12 {
          margin-left: 100%;
        }

        .col-xs-offset-11 {
          margin-left: 91.66666667%;
        }

        .col-xs-offset-10 {
          margin-left: 83.33333333%;
        }

        .col-xs-offset-9 {
          margin-left: 75%;
        }

        .col-xs-offset-8 {
          margin-left: 66.66666667%;
        }

        .col-xs-offset-7 {
          margin-left: 58.33333333%;
        }

        .col-xs-offset-6 {
          margin-left: 50%;
        }

        .col-xs-offset-5 {
          margin-left: 41.66666667%;
        }

        .col-xs-offset-4 {
          margin-left: 33.33333333%;
        }

        .col-xs-offset-3 {
          margin-left: 25%;
        }

        .col-xs-offset-2 {
          margin-left: 16.66666667%;
        }

        .col-xs-offset-1 {
          margin-left: 8.33333333%;
        }

        .col-xs-offset-0 {
          margin-left: 0%;
        }

        @media (min-width: 768px) {
          .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
            float: left;
          }

          .col-sm-12 {
            width: 100%;
          }

          .col-sm-11 {
            width: 91.66666667%;
          }

          .col-sm-10 {
            width: 83.33333333%;
          }

          .col-sm-9 {
            width: 75%;
          }

          .col-sm-8 {
            width: 66.66666667%;
          }

          .col-sm-7 {
            width: 58.33333333%;
          }

          .col-sm-6 {
            width: 50%;
          }

          .col-sm-5 {
            width: 41.66666667%;
          }

          .col-sm-4 {
            width: 33.33333333%;
          }

          .col-sm-3 {
            width: 25%;
          }

          .col-sm-2 {
            width: 16.66666667%;
          }

          .col-sm-1 {
            width: 8.33333333%;
          }

          .col-sm-pull-12 {
            right: 100%;
          }

          .col-sm-pull-11 {
            right: 91.66666667%;
          }

          .col-sm-pull-10 {
            right: 83.33333333%;
          }

          .col-sm-pull-9 {
            right: 75%;
          }

          .col-sm-pull-8 {
            right: 66.66666667%;
          }

          .col-sm-pull-7 {
            right: 58.33333333%;
          }

          .col-sm-pull-6 {
            right: 50%;
          }

          .col-sm-pull-5 {
            right: 41.66666667%;
          }

          .col-sm-pull-4 {
            right: 33.33333333%;
          }

          .col-sm-pull-3 {
            right: 25%;
          }

          .col-sm-pull-2 {
            right: 16.66666667%;
          }

          .col-sm-pull-1 {
            right: 8.33333333%;
          }

          .col-sm-pull-0 {
            right: 0%;
          }

          .col-sm-push-12 {
            left: 100%;
          }

          .col-sm-push-11 {
            left: 91.66666667%;
          }

          .col-sm-push-10 {
            left: 83.33333333%;
          }

          .col-sm-push-9 {
            left: 75%;
          }

          .col-sm-push-8 {
            left: 66.66666667%;
          }

          .col-sm-push-7 {
            left: 58.33333333%;
          }

          .col-sm-push-6 {
            left: 50%;
          }

          .col-sm-push-5 {
            left: 41.66666667%;
          }

          .col-sm-push-4 {
            left: 33.33333333%;
          }

          .col-sm-push-3 {
            left: 25%;
          }

          .col-sm-push-2 {
            left: 16.66666667%;
          }

          .col-sm-push-1 {
            left: 8.33333333%;
          }

          .col-sm-push-0 {
            left: 0%;
          }

          .col-sm-offset-12 {
            margin-left: 100%;
          }

          .col-sm-offset-11 {
            margin-left: 91.66666667%;
          }

          .col-sm-offset-10 {
            margin-left: 83.33333333%;
          }

          .col-sm-offset-9 {
            margin-left: 75%;
          }

          .col-sm-offset-8 {
            margin-left: 66.66666667%;
          }

          .col-sm-offset-7 {
            margin-left: 58.33333333%;
          }

          .col-sm-offset-6 {
            margin-left: 50%;
          }

          .col-sm-offset-5 {
            margin-left: 41.66666667%;
          }

          .col-sm-offset-4 {
            margin-left: 33.33333333%;
          }

          .col-sm-offset-3 {
            margin-left: 25%;
          }

          .col-sm-offset-2 {
            margin-left: 16.66666667%;
          }

          .col-sm-offset-1 {
            margin-left: 8.33333333%;
          }

          .col-sm-offset-0 {
            margin-left: 0%;
          }
        }

        @media (min-width: 992px) {
          .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
            float: left;
          }

          .col-md-12 {
            width: 100%;
          }

          .col-md-11 {
            width: 91.66666667%;
          }

          .col-md-10 {
            width: 83.33333333%;
          }

          .col-md-9 {
            width: 75%;
          }

          .col-md-8 {
            width: 66.66666667%;
          }

          .col-md-7 {
            width: 58.33333333%;
          }

          .col-md-6 {
            width: 50%;
          }

          .col-md-5 {
            width: 41.66666667%;
          }

          .col-md-4 {
            width: 33.33333333%;
          }

          .col-md-3 {
            width: 25%;
          }

          .col-md-2 {
            width: 16.66666667%;
          }

          .col-md-1 {
            width: 8.33333333%;
          }

          .col-md-pull-12 {
            right: 100%;
          }

          .col-md-pull-11 {
            right: 91.66666667%;
          }

          .col-md-pull-10 {
            right: 83.33333333%;
          }

          .col-md-pull-9 {
            right: 75%;
          }

          .col-md-pull-8 {
            right: 66.66666667%;
          }

          .col-md-pull-7 {
            right: 58.33333333%;
          }

          .col-md-pull-6 {
            right: 50%;
          }

          .col-md-pull-5 {
            right: 41.66666667%;
          }

          .col-md-pull-4 {
            right: 33.33333333%;
          }

          .col-md-pull-3 {
            right: 25%;
          }

          .col-md-pull-2 {
            right: 16.66666667%;
          }

          .col-md-pull-1 {
            right: 8.33333333%;
          }

          .col-md-pull-0 {
            right: 0%;
          }

          .col-md-push-12 {
            left: 100%;
          }

          .col-md-push-11 {
            left: 91.66666667%;
          }

          .col-md-push-10 {
            left: 83.33333333%;
          }

          .col-md-push-9 {
            left: 75%;
          }

          .col-md-push-8 {
            left: 66.66666667%;
          }

          .col-md-push-7 {
            left: 58.33333333%;
          }

          .col-md-push-6 {
            left: 50%;
          }

          .col-md-push-5 {
            left: 41.66666667%;
          }

          .col-md-push-4 {
            left: 33.33333333%;
          }

          .col-md-push-3 {
            left: 25%;
          }

          .col-md-push-2 {
            left: 16.66666667%;
          }

          .col-md-push-1 {
            left: 8.33333333%;
          }

          .col-md-push-0 {
            left: 0%;
          }

          .col-md-offset-12 {
            margin-left: 100%;
          }

          .col-md-offset-11 {
            margin-left: 91.66666667%;
          }

          .col-md-offset-10 {
            margin-left: 83.33333333%;
          }

          .col-md-offset-9 {
            margin-left: 75%;
          }

          .col-md-offset-8 {
            margin-left: 66.66666667%;
          }

          .col-md-offset-7 {
            margin-left: 58.33333333%;
          }

          .col-md-offset-6 {
            margin-left: 50%;
          }

          .col-md-offset-5 {
            margin-left: 41.66666667%;
          }

          .col-md-offset-4 {
            margin-left: 33.33333333%;
          }

          .col-md-offset-3 {
            margin-left: 25%;
          }

          .col-md-offset-2 {
            margin-left: 16.66666667%;
          }

          .col-md-offset-1 {
            margin-left: 8.33333333%;
          }

          .col-md-offset-0 {
            margin-left: 0%;
          }
        }

        @media (min-width: 1200px) {
          .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
            float: left;
          }

          .col-lg-12 {
            width: 100%;
          }

          .col-lg-11 {
            width: 91.66666667%;
          }

          .col-lg-10 {
            width: 83.33333333%;
          }

          .col-lg-9 {
            width: 75%;
          }

          .col-lg-8 {
            width: 66.66666667%;
          }

          .col-lg-7 {
            width: 58.33333333%;
          }

          .col-lg-6 {
            width: 50%;
          }

          .col-lg-5 {
            width: 41.66666667%;
          }

          .col-lg-4 {
            width: 33.33333333%;
          }

          .col-lg-3 {
            width: 25%;
          }

          .col-lg-2 {
            width: 16.66666667%;
          }

          .col-lg-1 {
            width: 8.33333333%;
          }

          .col-lg-pull-12 {
            right: 100%;
          }

          .col-lg-pull-11 {
            right: 91.66666667%;
          }

          .col-lg-pull-10 {
            right: 83.33333333%;
          }

          .col-lg-pull-9 {
            right: 75%;
          }

          .col-lg-pull-8 {
            right: 66.66666667%;
          }

          .col-lg-pull-7 {
            right: 58.33333333%;
          }

          .col-lg-pull-6 {
            right: 50%;
          }

          .col-lg-pull-5 {
            right: 41.66666667%;
          }

          .col-lg-pull-4 {
            right: 33.33333333%;
          }

          .col-lg-pull-3 {
            right: 25%;
          }

          .col-lg-pull-2 {
            right: 16.66666667%;
          }

          .col-lg-pull-1 {
            right: 8.33333333%;
          }

          .col-lg-pull-0 {
            right: 0%;
          }

          .col-lg-push-12 {
            left: 100%;
          }

          .col-lg-push-11 {
            left: 91.66666667%;
          }

          .col-lg-push-10 {
            left: 83.33333333%;
          }

          .col-lg-push-9 {
            left: 75%;
          }

          .col-lg-push-8 {
            left: 66.66666667%;
          }

          .col-lg-push-7 {
            left: 58.33333333%;
          }

          .col-lg-push-6 {
            left: 50%;
          }

          .col-lg-push-5 {
            left: 41.66666667%;
          }

          .col-lg-push-4 {
            left: 33.33333333%;
          }

          .col-lg-push-3 {
            left: 25%;
          }

          .col-lg-push-2 {
            left: 16.66666667%;
          }

          .col-lg-push-1 {
            left: 8.33333333%;
          }

          .col-lg-push-0 {
            left: 0%;
          }

          .col-lg-offset-12 {
            margin-left: 100%;
          }

          .col-lg-offset-11 {
            margin-left: 91.66666667%;
          }

          .col-lg-offset-10 {
            margin-left: 83.33333333%;
          }

          .col-lg-offset-9 {
            margin-left: 75%;
          }

          .col-lg-offset-8 {
            margin-left: 66.66666667%;
          }

          .col-lg-offset-7 {
            margin-left: 58.33333333%;
          }

          .col-lg-offset-6 {
            margin-left: 50%;
          }

          .col-lg-offset-5 {
            margin-left: 41.66666667%;
          }

          .col-lg-offset-4 {
            margin-left: 33.33333333%;
          }

          .col-lg-offset-3 {
            margin-left: 25%;
          }

          .col-lg-offset-2 {
            margin-left: 16.66666667%;
          }

          .col-lg-offset-1 {
            margin-left: 8.33333333%;
          }

          .col-lg-offset-0 {
            margin-left: 0%;
          }
        }

        table {
          max-width: 100%;
          background-color: transparent;
        }

        th {
          text-align: left;
        }

        .table {
          width: 100%;
          margin-bottom: 21px;
        }

        .table > thead > tr > th,
        .table > tbody > tr > th,
        .table > tfoot > tr > th,
        .table > thead > tr > td,
        .table > tbody > tr > td,
        .table > tfoot > tr > td {
          padding: 8px;
          line-height: 1.42857143;
          vertical-align: top;
          border-top: 1px solid #ecf0f1;
        }

        .table > thead > tr > th {
          vertical-align: bottom;
          border-bottom: 2px solid #ecf0f1;
        }

        .table > caption + thead > tr:first-child > th,
        .table > colgroup + thead > tr:first-child > th,
        .table > thead:first-child > tr:first-child > th,
        .table > caption + thead > tr:first-child > td,
        .table > colgroup + thead > tr:first-child > td,
        .table > thead:first-child > tr:first-child > td {
          border-top: 0;
        }

        .table > tbody + tbody {
          border-top: 2px solid #ecf0f1;
        }

        .table .table {
          background-color: #ffffff;
        }

        .table-condensed > thead > tr > th,
        .table-condensed > tbody > tr > th,
        .table-condensed > tfoot > tr > th,
        .table-condensed > thead > tr > td,
        .table-condensed > tbody > tr > td,
        .table-condensed > tfoot > tr > td {
          padding: 5px;
        }

        .table-bordered {
          border: 1px solid #ecf0f1;
        }

        .table-bordered > thead > tr > th,
        .table-bordered > tbody > tr > th,
        .table-bordered > tfoot > tr > th,
        .table-bordered > thead > tr > td,
        .table-bordered > tbody > tr > td,
        .table-bordered > tfoot > tr > td {
          border: 1px solid #ecf0f1;
        }

        .table-bordered > thead > tr > th,
        .table-bordered > thead > tr > td {
          border-bottom-width: 2px;
        }

        .table-striped > tbody > tr:nth-child(odd) > td,
        .table-striped > tbody > tr:nth-child(odd) > th {
          background-color: #f9f9f9;
        }

        .table-hover > tbody > tr:hover > td,
        .table-hover > tbody > tr:hover > th {
          background-color: #ecf0f1;
        }

        table col[class*="col-"] {
          position: static;
          float: none;
          display: table-column;
        }

        table td[class*="col-"],
        table th[class*="col-"] {
          position: static;
          float: none;
          display: table-cell;
        }

        .table > thead > tr > td.active,
        .table > tbody > tr > td.active,
        .table > tfoot > tr > td.active,
        .table > thead > tr > th.active,
        .table > tbody > tr > th.active,
        .table > tfoot > tr > th.active,
        .table > thead > tr.active > td,
        .table > tbody > tr.active > td,
        .table > tfoot > tr.active > td,
        .table > thead > tr.active > th,
        .table > tbody > tr.active > th,
        .table > tfoot > tr.active > th {
          background-color: #ecf0f1;
        }

        .table-hover > tbody > tr > td.active:hover,
        .table-hover > tbody > tr > th.active:hover,
        .table-hover > tbody > tr.active:hover > td,
        .table-hover > tbody > tr.active:hover > th {
          background-color: #dde4e6;
        }

        .table > thead > tr > td.success,
        .table > tbody > tr > td.success,
        .table > tfoot > tr > td.success,
        .table > thead > tr > th.success,
        .table > tbody > tr > th.success,
        .table > tfoot > tr > th.success,
        .table > thead > tr.success > td,
        .table > tbody > tr.success > td,
        .table > tfoot > tr.success > td,
        .table > thead > tr.success > th,
        .table > tbody > tr.success > th,
        .table > tfoot > tr.success > th {
          background-color: #18bc9c;
        }

        .table-hover > tbody > tr > td.success:hover,
        .table-hover > tbody > tr > th.success:hover,
        .table-hover > tbody > tr.success:hover > td,
        .table-hover > tbody > tr.success:hover > th {
          background-color: #15a589;
        }

        .table > thead > tr > td.info,
        .table > tbody > tr > td.info,
        .table > tfoot > tr > td.info,
        .table > thead > tr > th.info,
        .table > tbody > tr > th.info,
        .table > tfoot > tr > th.info,
        .table > thead > tr.info > td,
        .table > tbody > tr.info > td,
        .table > tfoot > tr.info > td,
        .table > thead > tr.info > th,
        .table > tbody > tr.info > th,
        .table > tfoot > tr.info > th {
          background-color: #3498db;
        }

        .table-hover > tbody > tr > td.info:hover,
        .table-hover > tbody > tr > th.info:hover,
        .table-hover > tbody > tr.info:hover > td,
        .table-hover > tbody > tr.info:hover > th {
          background-color: #258cd1;
        }

        .table > thead > tr > td.warning,
        .table > tbody > tr > td.warning,
        .table > tfoot > tr > td.warning,
        .table > thead > tr > th.warning,
        .table > tbody > tr > th.warning,
        .table > tfoot > tr > th.warning,
        .table > thead > tr.warning > td,
        .table > tbody > tr.warning > td,
        .table > tfoot > tr.warning > td,
        .table > thead > tr.warning > th,
        .table > tbody > tr.warning > th,
        .table > tfoot > tr.warning > th {
          background-color: #f39c12;
        }

        .table-hover > tbody > tr > td.warning:hover,
        .table-hover > tbody > tr > th.warning:hover,
        .table-hover > tbody > tr.warning:hover > td,
        .table-hover > tbody > tr.warning:hover > th {
          background-color: #e08e0b;
        }

        .table > thead > tr > td.danger,
        .table > tbody > tr > td.danger,
        .table > tfoot > tr > td.danger,
        .table > thead > tr > th.danger,
        .table > tbody > tr > th.danger,
        .table > tfoot > tr > th.danger,
        .table > thead > tr.danger > td,
        .table > tbody > tr.danger > td,
        .table > tfoot > tr.danger > td,
        .table > thead > tr.danger > th,
        .table > tbody > tr.danger > th,
        .table > tfoot > tr.danger > th {
          background-color: #e74c3c;
        }

        .table-hover > tbody > tr > td.danger:hover,
        .table-hover > tbody > tr > th.danger:hover,
        .table-hover > tbody > tr.danger:hover > td,
        .table-hover > tbody > tr.danger:hover > th {
          background-color: #e43725;
        }

        @media (max-width: 767px) {
          .table-responsive {
            width: 100%;
            margin-bottom: 15.75px;
            overflow-y: hidden;
            overflow-x: scroll;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            border: 1px solid #ecf0f1;
            -webkit-overflow-scrolling: touch;
          }

          .table-responsive > .table {
            margin-bottom: 0;
          }

          .table-responsive > .table > thead > tr > th,
          .table-responsive > .table > tbody > tr > th,
          .table-responsive > .table > tfoot > tr > th,
          .table-responsive > .table > thead > tr > td,
          .table-responsive > .table > tbody > tr > td,
          .table-responsive > .table > tfoot > tr > td {
            white-space: nowrap;
          }

          .table-responsive > .table-bordered {
            border: 0;
          }

          .table-responsive > .table-bordered > thead > tr > th:first-child,
          .table-responsive > .table-bordered > tbody > tr > th:first-child,
          .table-responsive > .table-bordered > tfoot > tr > th:first-child,
          .table-responsive > .table-bordered > thead > tr > td:first-child,
          .table-responsive > .table-bordered > tbody > tr > td:first-child,
          .table-responsive > .table-bordered > tfoot > tr > td:first-child {
            border-left: 0;
          }

          .table-responsive > .table-bordered > thead > tr > th:last-child,
          .table-responsive > .table-bordered > tbody > tr > th:last-child,
          .table-responsive > .table-bordered > tfoot > tr > th:last-child,
          .table-responsive > .table-bordered > thead > tr > td:last-child,
          .table-responsive > .table-bordered > tbody > tr > td:last-child,
          .table-responsive > .table-bordered > tfoot > tr > td:last-child {
            border-right: 0;
          }

          .table-responsive > .table-bordered > tbody > tr:last-child > th,
          .table-responsive > .table-bordered > tfoot > tr:last-child > th,
          .table-responsive > .table-bordered > tbody > tr:last-child > td,
          .table-responsive > .table-bordered > tfoot > tr:last-child > td {
            border-bottom: 0;
          }
        }

        fieldset {
          padding: 0;
          margin: 0;
          border: 0;
          min-width: 0;
        }

        legend {
          display: block;
          width: 100%;
          padding: 0;
          margin-bottom: 21px;
          font-size: 22.5px;
          line-height: inherit;
          color: #2c3e50;
          border: 0;
          border-bottom: 1px solid #e5e5e5;
        }

        label {
          display: inline-block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input[type="search"] {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        input[type="radio"],
        input[type="checkbox"] {
          margin: 4px 0 0;
          margin-top: 1px \9;
          /* IE8-9 */
          line-height: normal;
        }

        input[type="file"] {
          display: block;
        }

        input[type="range"] {
          display: block;
          width: 100%;
        }

        select[multiple],
        select[size] {
          height: auto;
        }

        input[type="file"]:focus,
        input[type="radio"]:focus,
        input[type="checkbox"]:focus {
          outline: thin dotted;
          outline: 5px auto -webkit-focus-ring-color;
          outline-offset: -2px;
        }

        output {
          display: block;
          padding-top: 11px;
          font-size: 15px;
          line-height: 1.42857143;
          color: #2c3e50;
        }

        .form-control {
          display: block;
          width: 100%;
          height: 43px;
          padding: 10px 15px;
          font-size: 15px;
          line-height: 1.42857143;
          color: #2c3e50;
          background-color: #ffffff;
          background-image: none;
          border: 1px solid #dce4ec;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        }

        .form-control:focus {
          border-color: #1abc9c;
          outline: 0;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(26, 188, 156, 0.6);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(26, 188, 156, 0.6);
        }

        .form-control::-moz-placeholder {
          color: #acb6c0;
          opacity: 1;
        }

        .form-control:-ms-input-placeholder {
          color: #acb6c0;
        }

        .form-control::-webkit-input-placeholder {
          color: #acb6c0;
        }

        .form-control[disabled],
        .form-control[readonly],
        fieldset[disabled] .form-control {
          cursor: not-allowed;
          background-color: #ecf0f1;
          opacity: 1;
        }

        textarea.form-control {
          height: auto;
        }

        input[type="search"] {
          -webkit-appearance: none;
        }

        input[type="date"] {
          line-height: 43px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .radio,
        .checkbox {
          display: block;
          min-height: 21px;
          margin-top: 10px;
          margin-bottom: 10px;
          padding-left: 20px;
        }

        .radio label,
        .checkbox label {
          display: inline;
          font-weight: normal;
          cursor: pointer;
        }

        .radio input[type="radio"],
        .radio-inline input[type="radio"],
        .checkbox input[type="checkbox"],
        .checkbox-inline input[type="checkbox"] {
          float: left;
          margin-left: -20px;
        }

        .radio + .radio,
        .checkbox + .checkbox {
          margin-top: -5px;
        }

        .radio-inline,
        .checkbox-inline {
          display: inline-block;
          padding-left: 20px;
          margin-bottom: 0;
          vertical-align: middle;
          font-weight: normal;
          cursor: pointer;
        }

        .radio-inline + .radio-inline,
        .checkbox-inline + .checkbox-inline {
          margin-top: 0;
          margin-left: 10px;
        }

        input[type="radio"][disabled],
        input[type="checkbox"][disabled],
        .radio[disabled],
        .radio-inline[disabled],
        .checkbox[disabled],
        .checkbox-inline[disabled],
        fieldset[disabled] input[type="radio"],
        fieldset[disabled] input[type="checkbox"],
        fieldset[disabled] .radio,
        fieldset[disabled] .radio-inline,
        fieldset[disabled] .checkbox,
        fieldset[disabled] .checkbox-inline {
          cursor: not-allowed;
        }

        .input-sm {
          height: 33px;
          padding: 6px 9px;
          font-size: 13px;
          line-height: 1.5;
          border-radius: 3px;
        }

        select.input-sm {
          height: 33px;
          line-height: 33px;
        }

        textarea.input-sm,
        select[multiple].input-sm {
          height: auto;
        }

        .input-lg {
          height: 64px;
          padding: 18px 27px;
          font-size: 19px;
          line-height: 1.33;
          border-radius: 6px;
        }

        select.input-lg {
          height: 64px;
          line-height: 64px;
        }

        textarea.input-lg,
        select[multiple].input-lg {
          height: auto;
        }

        .has-feedback {
          position: relative;
        }

        .has-feedback .form-control {
          padding-right: 53.75px;
        }

        .has-feedback .form-control-feedback {
          position: absolute;
          top: 26px;
          right: 0;
          display: block;
          width: 43px;
          height: 43px;
          line-height: 43px;
          text-align: center;
        }

        .has-success .help-block,
        .has-success .control-label,
        .has-success .radio,
        .has-success .checkbox,
        .has-success .radio-inline,
        .has-success .checkbox-inline {
          color: #ffffff;
        }

        .has-success .form-control {
          border-color: #ffffff;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }

        .has-success .form-control:focus {
          border-color: #e6e6e6;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;
        }

        .has-success .input-group-addon {
          color: #ffffff;
          border-color: #ffffff;
          background-color: #18bc9c;
        }

        .has-success .form-control-feedback {
          color: #ffffff;
        }

        .has-warning .help-block,
        .has-warning .control-label,
        .has-warning .radio,
        .has-warning .checkbox,
        .has-warning .radio-inline,
        .has-warning .checkbox-inline {
          color: #ffffff;
        }

        .has-warning .form-control {
          border-color: #ffffff;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }

        .has-warning .form-control:focus {
          border-color: #e6e6e6;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;
        }

        .has-warning .input-group-addon {
          color: #ffffff;
          border-color: #ffffff;
          background-color: #f39c12;
        }

        .has-warning .form-control-feedback {
          color: #ffffff;
        }

        .has-error .help-block,
        .has-error .control-label,
        .has-error .radio,
        .has-error .checkbox,
        .has-error .radio-inline,
        .has-error .checkbox-inline {
          color: #ffffff;
        }

        .has-error .form-control {
          border-color: #ffffff;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }

        .has-error .form-control:focus {
          border-color: #e6e6e6;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffffff;
        }

        .has-error .input-group-addon {
          color: #ffffff;
          border-color: #ffffff;
          background-color: #e74c3c;
        }

        .has-error .form-control-feedback {
          color: #ffffff;
        }

        .form-control-static {
          margin-bottom: 0;
        }

        .help-block {
          display: block;
          margin-top: 5px;
          margin-bottom: 10px;
          color: #597ea2;
        }

        @media (min-width: 768px) {
          .form-inline .form-group {
            display: inline-block;
            margin-bottom: 0;
            vertical-align: middle;
          }

          .form-inline .form-control {
            display: inline-block;
            width: auto;
            vertical-align: middle;
          }

          .form-inline .input-group > .form-control {
            width: 100%;
          }

          .form-inline .control-label {
            margin-bottom: 0;
            vertical-align: middle;
          }

          .form-inline .radio,
          .form-inline .checkbox {
            display: inline-block;
            margin-top: 0;
            margin-bottom: 0;
            padding-left: 0;
            vertical-align: middle;
          }

          .form-inline .radio input[type="radio"],
          .form-inline .checkbox input[type="checkbox"] {
            float: none;
            margin-left: 0;
          }

          .form-inline .has-feedback .form-control-feedback {
            top: 0;
          }
        }

        .form-horizontal .control-label,
        .form-horizontal .radio,
        .form-horizontal .checkbox,
        .form-horizontal .radio-inline,
        .form-horizontal .checkbox-inline {
          margin-top: 0;
          margin-bottom: 0;
          padding-top: 11px;
        }

        .form-horizontal .radio,
        .form-horizontal .checkbox {
          min-height: 32px;
        }

        .form-horizontal .form-group {
          margin-left: -15px;
          margin-right: -15px;
        }

        .form-horizontal .form-control-static {
          padding-top: 11px;
        }

        @media (min-width: 768px) {
          .form-horizontal .control-label {
            text-align: right;
          }
        }

        .form-horizontal .has-feedback .form-control-feedback {
          top: 0;
          right: 15px;
        }

        .btn {
          display: inline-block;
          margin-bottom: 0;
          font-weight: normal;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          background-image: none;
          border: 1px solid transparent;
          white-space: nowrap;
          padding: 10px 15px;
          font-size: 15px;
          line-height: 1.42857143;
          border-radius: 4px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .btn:focus,
        .btn:active:focus,
        .btn.active:focus {
          outline: thin dotted;
          outline: 5px auto -webkit-focus-ring-color;
          outline-offset: -2px;
        }

        .btn:hover,
        .btn:focus {
          color: #ffffff;
          text-decoration: none;
        }

        .btn:active,
        .btn.active {
          outline: 0;
          background-image: none;
          -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        }

        .btn.disabled,
        .btn[disabled],
        fieldset[disabled] .btn {
          cursor: not-allowed;
          pointer-events: none;
          opacity: 0.65;
          filter: alpha(opacity=65);
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .btn-default {
          color: #ffffff;
          background-color: #95a5a6;
          border-color: #95a5a6;
        }

        .btn-default:hover,
        .btn-default:focus,
        .btn-default:active,
        .btn-default.active,
        .open .dropdown-toggle.btn-default {
          color: #ffffff;
          background-color: #7f9293;
          border-color: #74898a;
        }

        .btn-default:active,
        .btn-default.active,
        .open .dropdown-toggle.btn-default {
          background-image: none;
        }

        .btn-default.disabled,
        .btn-default[disabled],
        fieldset[disabled] .btn-default,
        .btn-default.disabled:hover,
        .btn-default[disabled]:hover,
        fieldset[disabled] .btn-default:hover,
        .btn-default.disabled:focus,
        .btn-default[disabled]:focus,
        fieldset[disabled] .btn-default:focus,
        .btn-default.disabled:active,
        .btn-default[disabled]:active,
        fieldset[disabled] .btn-default:active,
        .btn-default.disabled.active,
        .btn-default[disabled].active,
        fieldset[disabled] .btn-default.active {
          background-color: #95a5a6;
          border-color: #95a5a6;
        }

        .btn-default .badge {
          color: #95a5a6;
          background-color: #ffffff;
        }

        .btn-primary {
          color: #ffffff;
          background-color: #2c3e50;
          border-color: #2c3e50;
        }

        .btn-primary:hover,
        .btn-primary:focus,
        .btn-primary:active,
        .btn-primary.active,
        .open .dropdown-toggle.btn-primary {
          color: #ffffff;
          background-color: #1e2a36;
          border-color: #161f29;
        }

        .btn-primary:active,
        .btn-primary.active,
        .open .dropdown-toggle.btn-primary {
          background-image: none;
        }

        .btn-primary.disabled,
        .btn-primary[disabled],
        fieldset[disabled] .btn-primary,
        .btn-primary.disabled:hover,
        .btn-primary[disabled]:hover,
        fieldset[disabled] .btn-primary:hover,
        .btn-primary.disabled:focus,
        .btn-primary[disabled]:focus,
        fieldset[disabled] .btn-primary:focus,
        .btn-primary.disabled:active,
        .btn-primary[disabled]:active,
        fieldset[disabled] .btn-primary:active,
        .btn-primary.disabled.active,
        .btn-primary[disabled].active,
        fieldset[disabled] .btn-primary.active {
          background-color: #2c3e50;
          border-color: #2c3e50;
        }

        .btn-primary .badge {
          color: #2c3e50;
          background-color: #ffffff;
        }

        .btn-success {
          color: #ffffff;
          background-color: #18bc9c;
          border-color: #18bc9c;
        }

        .btn-success:hover,
        .btn-success:focus,
        .btn-success:active,
        .btn-success.active,
        .open .dropdown-toggle.btn-success {
          color: #ffffff;
          background-color: #13987e;
          border-color: #11866f;
        }

        .btn-success:active,
        .btn-success.active,
        .open .dropdown-toggle.btn-success {
          background-image: none;
        }

        .btn-success.disabled,
        .btn-success[disabled],
        fieldset[disabled] .btn-success,
        .btn-success.disabled:hover,
        .btn-success[disabled]:hover,
        fieldset[disabled] .btn-success:hover,
        .btn-success.disabled:focus,
        .btn-success[disabled]:focus,
        fieldset[disabled] .btn-success:focus,
        .btn-success.disabled:active,
        .btn-success[disabled]:active,
        fieldset[disabled] .btn-success:active,
        .btn-success.disabled.active,
        .btn-success[disabled].active,
        fieldset[disabled] .btn-success.active {
          background-color: #18bc9c;
          border-color: #18bc9c;
        }

        .btn-success .badge {
          color: #18bc9c;
          background-color: #ffffff;
        }

        .btn-info {
          color: #ffffff;
          background-color: #3498db;
          border-color: #3498db;
        }

        .btn-info:hover,
        .btn-info:focus,
        .btn-info:active,
        .btn-info.active,
        .open .dropdown-toggle.btn-info {
          color: #ffffff;
          background-color: #2383c4;
          border-color: #2077b2;
        }

        .btn-info:active,
        .btn-info.active,
        .open .dropdown-toggle.btn-info {
          background-image: none;
        }

        .btn-info.disabled,
        .btn-info[disabled],
        fieldset[disabled] .btn-info,
        .btn-info.disabled:hover,
        .btn-info[disabled]:hover,
        fieldset[disabled] .btn-info:hover,
        .btn-info.disabled:focus,
        .btn-info[disabled]:focus,
        fieldset[disabled] .btn-info:focus,
        .btn-info.disabled:active,
        .btn-info[disabled]:active,
        fieldset[disabled] .btn-info:active,
        .btn-info.disabled.active,
        .btn-info[disabled].active,
        fieldset[disabled] .btn-info.active {
          background-color: #3498db;
          border-color: #3498db;
        }

        .btn-info .badge {
          color: #3498db;
          background-color: #ffffff;
        }

        .btn-warning {
          color: #ffffff;
          background-color: #f39c12;
          border-color: #f39c12;
        }

        .btn-warning:hover,
        .btn-warning:focus,
        .btn-warning:active,
        .btn-warning.active,
        .open .dropdown-toggle.btn-warning {
          color: #ffffff;
          background-color: #d2850b;
          border-color: #be780a;
        }

        .btn-warning:active,
        .btn-warning.active,
        .open .dropdown-toggle.btn-warning {
          background-image: none;
        }

        .btn-warning.disabled,
        .btn-warning[disabled],
        fieldset[disabled] .btn-warning,
        .btn-warning.disabled:hover,
        .btn-warning[disabled]:hover,
        fieldset[disabled] .btn-warning:hover,
        .btn-warning.disabled:focus,
        .btn-warning[disabled]:focus,
        fieldset[disabled] .btn-warning:focus,
        .btn-warning.disabled:active,
        .btn-warning[disabled]:active,
        fieldset[disabled] .btn-warning:active,
        .btn-warning.disabled.active,
        .btn-warning[disabled].active,
        fieldset[disabled] .btn-warning.active {
          background-color: #f39c12;
          border-color: #f39c12;
        }

        .btn-warning .badge {
          color: #f39c12;
          background-color: #ffffff;
        }

        .btn-danger {
          color: #ffffff;
          background-color: #e74c3c;
          border-color: #e74c3c;
        }

        .btn-danger:hover,
        .btn-danger:focus,
        .btn-danger:active,
        .btn-danger.active,
        .open .dropdown-toggle.btn-danger {
          color: #ffffff;
          background-color: #df2e1b;
          border-color: #cd2a19;
        }

        .btn-danger:active,
        .btn-danger.active,
        .open .dropdown-toggle.btn-danger {
          background-image: none;
        }

        .btn-danger.disabled,
        .btn-danger[disabled],
        fieldset[disabled] .btn-danger,
        .btn-danger.disabled:hover,
        .btn-danger[disabled]:hover,
        fieldset[disabled] .btn-danger:hover,
        .btn-danger.disabled:focus,
        .btn-danger[disabled]:focus,
        fieldset[disabled] .btn-danger:focus,
        .btn-danger.disabled:active,
        .btn-danger[disabled]:active,
        fieldset[disabled] .btn-danger:active,
        .btn-danger.disabled.active,
        .btn-danger[disabled].active,
        fieldset[disabled] .btn-danger.active {
          background-color: #e74c3c;
          border-color: #e74c3c;
        }

        .btn-danger .badge {
          color: #e74c3c;
          background-color: #ffffff;
        }

        .btn-link {
          color: #18bc9c;
          font-weight: normal;
          cursor: pointer;
          border-radius: 0;
        }

        .btn-link,
        .btn-link:active,
        .btn-link[disabled],
        fieldset[disabled] .btn-link {
          background-color: transparent;
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .btn-link,
        .btn-link:hover,
        .btn-link:focus,
        .btn-link:active {
          border-color: transparent;
        }

        .btn-link:hover,
        .btn-link:focus {
          color: #18bc9c;
          text-decoration: underline;
          background-color: transparent;
        }

        .btn-link[disabled]:hover,
        fieldset[disabled] .btn-link:hover,
        .btn-link[disabled]:focus,
        fieldset[disabled] .btn-link:focus {
          color: #b4bcc2;
          text-decoration: none;
        }

        .btn-lg,
        .btn-group-lg > .btn {
          padding: 18px 27px;
          font-size: 19px;
          line-height: 1.33;
          border-radius: 6px;
        }

        .btn-sm,
        .btn-group-sm > .btn {
          padding: 6px 9px;
          font-size: 13px;
          line-height: 1.5;
          border-radius: 3px;
        }

        .btn-xs,
        .btn-group-xs > .btn {
          padding: 1px 5px;
          font-size: 13px;
          line-height: 1.5;
          border-radius: 3px;
        }

        .btn-block {
          display: block;
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        .btn-block + .btn-block {
          margin-top: 5px;
        }

        input[type="submit"].btn-block,
        input[type="reset"].btn-block,
        input[type="button"].btn-block {
          width: 100%;
        }

        .fade {
          opacity: 0;
          -webkit-transition: opacity 0.15s linear;
          transition: opacity 0.15s linear;
        }

        .fade.in {
          opacity: 1;
        }

        .collapse {
          display: none;
        }

        .collapse.in {
          display: block;
        }

        .collapsing {
          position: relative;
          height: 0;
          overflow: hidden;
          -webkit-transition: height 0.35s ease;
          transition: height 0.35s ease;
        }

        .caret {
          display: inline-block;
          width: 0;
          height: 0;
          margin-left: 2px;
          vertical-align: middle;
          border-top: 4px solid;
          border-right: 4px solid transparent;
          border-left: 4px solid transparent;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-toggle:focus {
          outline: 0;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
          display: none;
          float: left;
          min-width: 160px;
          padding: 5px 0;
          margin: 2px 0 0;
          list-style: none;
          font-size: 15px;
          background-color: #ffffff;
          border: 1px solid #cccccc;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
          background-clip: padding-box;
        }

        .dropdown-menu.pull-right {
          right: 0;
          left: auto;
        }

        .dropdown-menu .divider {
          height: 1px;
          margin: 9.5px 0;
          overflow: hidden;
          background-color: #e5e5e5;
        }

        .dropdown-menu > li > a {
          display: block;
          padding: 3px 20px;
          clear: both;
          font-weight: normal;
          line-height: 1.42857143;
          color: #7b8a8b;
          white-space: nowrap;
        }

        .dropdown-menu > li > a:hover,
        .dropdown-menu > li > a:focus {
          text-decoration: none;
          color: #ffffff;
          background-color: #2c3e50;
        }

        .dropdown-menu > .active > a,
        .dropdown-menu > .active > a:hover,
        .dropdown-menu > .active > a:focus {
          color: #ffffff;
          text-decoration: none;
          outline: 0;
          background-color: #2c3e50;
        }

        .dropdown-menu > .disabled > a,
        .dropdown-menu > .disabled > a:hover,
        .dropdown-menu > .disabled > a:focus {
          color: #b4bcc2;
        }

        .dropdown-menu > .disabled > a:hover,
        .dropdown-menu > .disabled > a:focus {
          text-decoration: none;
          background-color: transparent;
          background-image: none;
          filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
          cursor: not-allowed;
        }

        .open > .dropdown-menu {
          display: block;
        }

        .open > a {
          outline: 0;
        }

        .dropdown-menu-right {
          left: auto;
          right: 0;
        }

        .dropdown-menu-left {
          left: 0;
          right: auto;
        }

        .dropdown-header {
          display: block;
          padding: 3px 20px;
          font-size: 13px;
          line-height: 1.42857143;
          color: #b4bcc2;
        }

        .dropdown-backdrop {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          z-index: 990;
        }

        .pull-right > .dropdown-menu {
          right: 0;
          left: auto;
        }

        .dropup .caret,
        .navbar-fixed-bottom .dropdown .caret {
          border-top: 0;
          border-bottom: 4px solid;
          content: "";
        }

        .dropup .dropdown-menu,
        .navbar-fixed-bottom .dropdown .dropdown-menu {
          top: auto;
          bottom: 100%;
          margin-bottom: 1px;
        }

        @media (min-width: 768px) {
          .navbar-right .dropdown-menu {
            left: auto;
            right: 0;
          }

          .navbar-right .dropdown-menu-left {
            left: 0;
            right: auto;
          }
        }

        .btn-group,
        .btn-group-vertical {
          position: relative;
          display: inline-block;
          vertical-align: middle;
        }

        .btn-group > .btn,
        .btn-group-vertical > .btn {
          position: relative;
          float: left;
        }

        .btn-group > .btn:hover,
        .btn-group-vertical > .btn:hover,
        .btn-group > .btn:focus,
        .btn-group-vertical > .btn:focus,
        .btn-group > .btn:active,
        .btn-group-vertical > .btn:active,
        .btn-group > .btn.active,
        .btn-group-vertical > .btn.active {
          z-index: 2;
        }

        .btn-group > .btn:focus,
        .btn-group-vertical > .btn:focus {
          outline: none;
        }

        .btn-group .btn + .btn,
        .btn-group .btn + .btn-group,
        .btn-group .btn-group + .btn,
        .btn-group .btn-group + .btn-group {
          margin-left: -1px;
        }

        .btn-toolbar {
          margin-left: -5px;
        }

        .btn-toolbar .btn-group,
        .btn-toolbar .input-group {
          float: left;
        }

        .btn-toolbar > .btn,
        .btn-toolbar > .btn-group,
        .btn-toolbar > .input-group {
          margin-left: 5px;
        }

        .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
          border-radius: 0;
        }

        .btn-group > .btn:first-child {
          margin-left: 0;
        }

        .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }

        .btn-group > .btn:last-child:not(:first-child),
        .btn-group > .dropdown-toggle:not(:first-child) {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }

        .btn-group > .btn-group {
          float: left;
        }

        .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
          border-radius: 0;
        }

        .btn-group > .btn-group:first-child > .btn:last-child,
        .btn-group > .btn-group:first-child > .dropdown-toggle {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }

        .btn-group > .btn-group:last-child > .btn:first-child {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }

        .btn-group .dropdown-toggle:active,
        .btn-group.open .dropdown-toggle {
          outline: 0;
        }

        .btn-group > .btn + .dropdown-toggle {
          padding-left: 8px;
          padding-right: 8px;
        }

        .btn-group > .btn-lg + .dropdown-toggle {
          padding-left: 12px;
          padding-right: 12px;
        }

        .btn-group.open .dropdown-toggle {
          -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        }

        .btn-group.open .dropdown-toggle.btn-link {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .btn .caret {
          margin-left: 0;
        }

        .btn-lg .caret {
          border-width: 5px 5px 0;
          border-bottom-width: 0;
        }

        .dropup .btn-lg .caret {
          border-width: 0 5px 5px;
        }

        .btn-group-vertical > .btn,
        .btn-group-vertical > .btn-group,
        .btn-group-vertical > .btn-group > .btn {
          display: block;
          float: none;
          width: 100%;
          max-width: 100%;
        }

        .btn-group-vertical > .btn-group > .btn {
          float: none;
        }

        .btn-group-vertical > .btn + .btn,
        .btn-group-vertical > .btn + .btn-group,
        .btn-group-vertical > .btn-group + .btn,
        .btn-group-vertical > .btn-group + .btn-group {
          margin-top: -1px;
          margin-left: 0;
        }

        .btn-group-vertical > .btn:not(:first-child):not(:last-child) {
          border-radius: 0;
        }

        .btn-group-vertical > .btn:first-child:not(:last-child) {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        .btn-group-vertical > .btn:last-child:not(:first-child) {
          border-bottom-left-radius: 4px;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
          border-radius: 0;
        }

        .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
        .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        .btn-group-justified {
          display: table;
          width: 100%;
          table-layout: fixed;
          border-collapse: separate;
        }

        .btn-group-justified > .btn,
        .btn-group-justified > .btn-group {
          float: none;
          display: table-cell;
          width: 1%;
        }

        .btn-group-justified > .btn-group .btn {
          width: 100%;
        }

        [data-toggle="buttons"] > .btn > input[type="radio"],
        [data-toggle="buttons"] > .btn > input[type="checkbox"] {
          display: none;
        }

        .input-group {
          position: relative;
          display: table;
          border-collapse: separate;
        }

        .input-group[class*="col-"] {
          float: none;
          padding-left: 0;
          padding-right: 0;
        }

        .input-group .form-control {
          position: relative;
          z-index: 2;
          float: left;
          width: 100%;
          margin-bottom: 0;
        }

        .input-group-lg > .form-control,
        .input-group-lg > .input-group-addon,
        .input-group-lg > .input-group-btn > .btn {
          height: 64px;
          padding: 18px 27px;
          font-size: 19px;
          line-height: 1.33;
          border-radius: 6px;
        }

        select.input-group-lg > .form-control,
        select.input-group-lg > .input-group-addon,
        select.input-group-lg > .input-group-btn > .btn {
          height: 64px;
          line-height: 64px;
        }

        textarea.input-group-lg > .form-control,
        textarea.input-group-lg > .input-group-addon,
        textarea.input-group-lg > .input-group-btn > .btn,
        select[multiple].input-group-lg > .form-control,
        select[multiple].input-group-lg > .input-group-addon,
        select[multiple].input-group-lg > .input-group-btn > .btn {
          height: auto;
        }

        .input-group-sm > .form-control,
        .input-group-sm > .input-group-addon,
        .input-group-sm > .input-group-btn > .btn {
          height: 33px;
          padding: 6px 9px;
          font-size: 13px;
          line-height: 1.5;
          border-radius: 3px;
        }

        select.input-group-sm > .form-control,
        select.input-group-sm > .input-group-addon,
        select.input-group-sm > .input-group-btn > .btn {
          height: 33px;
          line-height: 33px;
        }

        textarea.input-group-sm > .form-control,
        textarea.input-group-sm > .input-group-addon,
        textarea.input-group-sm > .input-group-btn > .btn,
        select[multiple].input-group-sm > .form-control,
        select[multiple].input-group-sm > .input-group-addon,
        select[multiple].input-group-sm > .input-group-btn > .btn {
          height: auto;
        }

        .input-group-addon,
        .input-group-btn,
        .input-group .form-control {
          display: table-cell;
        }

        .input-group-addon:not(:first-child):not(:last-child),
        .input-group-btn:not(:first-child):not(:last-child),
        .input-group .form-control:not(:first-child):not(:last-child) {
          border-radius: 0;
        }

        .input-group-addon,
        .input-group-btn {
          width: 1%;
          white-space: nowrap;
          vertical-align: middle;
        }

        .input-group-addon {
          padding: 10px 15px;
          font-size: 15px;
          font-weight: normal;
          line-height: 1;
          color: #2c3e50;
          text-align: center;
          background-color: #ecf0f1;
          border: 1px solid #dce4ec;
          border-radius: 4px;
        }

        .input-group-addon.input-sm {
          padding: 6px 9px;
          font-size: 13px;
          border-radius: 3px;
        }

        .input-group-addon.input-lg {
          padding: 18px 27px;
          font-size: 19px;
          border-radius: 6px;
        }

        .input-group-addon input[type="radio"],
        .input-group-addon input[type="checkbox"] {
          margin-top: 0;
        }

        .input-group .form-control:first-child,
        .input-group-addon:first-child,
        .input-group-btn:first-child > .btn,
        .input-group-btn:first-child > .btn-group > .btn,
        .input-group-btn:first-child > .dropdown-toggle,
        .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
        .input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }

        .input-group-addon:first-child {
          border-right: 0;
        }

        .input-group .form-control:last-child,
        .input-group-addon:last-child,
        .input-group-btn:last-child > .btn,
        .input-group-btn:last-child > .btn-group > .btn,
        .input-group-btn:last-child > .dropdown-toggle,
        .input-group-btn:first-child > .btn:not(:first-child),
        .input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }

        .input-group-addon:last-child {
          border-left: 0;
        }

        .input-group-btn {
          position: relative;
          font-size: 0;
          white-space: nowrap;
        }

        .input-group-btn > .btn {
          position: relative;
        }

        .input-group-btn > .btn + .btn {
          margin-left: -1px;
        }

        .input-group-btn > .btn:hover,
        .input-group-btn > .btn:focus,
        .input-group-btn > .btn:active {
          z-index: 2;
        }

        .input-group-btn:first-child > .btn,
        .input-group-btn:first-child > .btn-group {
          margin-right: -1px;
        }

        .input-group-btn:last-child > .btn,
        .input-group-btn:last-child > .btn-group {
          margin-left: -1px;
        }

        .nav {
          margin-bottom: 0;
          padding-left: 0;
          list-style: none;
        }

        .nav > li {
          position: relative;
          display: block;
        }

        .nav > li > a {
          position: relative;
          display: block;
          padding: 10px 15px;
        }

        .nav > li > a:hover,
        .nav > li > a:focus {
          text-decoration: none;
          background-color: #ecf0f1;
        }

        .nav > li.disabled > a {
          color: #b4bcc2;
        }

        .nav > li.disabled > a:hover,
        .nav > li.disabled > a:focus {
          color: #b4bcc2;
          text-decoration: none;
          background-color: transparent;
          cursor: not-allowed;
        }

        .nav .open > a,
        .nav .open > a:hover,
        .nav .open > a:focus {
          background-color: #ecf0f1;
          border-color: #18bc9c;
        }

        .nav .nav-divider {
          height: 1px;
          margin: 9.5px 0;
          overflow: hidden;
          background-color: #e5e5e5;
        }

        .nav > li > a > img {
          max-width: none;
        }

        .nav-tabs {
          border-bottom: 1px solid #ecf0f1;
        }

        .nav-tabs > li {
          float: left;
          margin-bottom: -1px;
        }

        .nav-tabs > li > a {
          margin-right: 2px;
          line-height: 1.42857143;
          border: 1px solid transparent;
          border-radius: 4px 4px 0 0;
        }

        .nav-tabs > li > a:hover {
          border-color: #ecf0f1 #ecf0f1 #ecf0f1;
        }

        .nav-tabs > li.active > a,
        .nav-tabs > li.active > a:hover,
        .nav-tabs > li.active > a:focus {
          color: #2c3e50;
          background-color: #ffffff;
          border: 1px solid #ecf0f1;
          border-bottom-color: transparent;
          cursor: default;
        }

        .nav-tabs.nav-justified {
          width: 100%;
          border-bottom: 0;
        }

        .nav-tabs.nav-justified > li {
          float: none;
        }

        .nav-tabs.nav-justified > li > a {
          text-align: center;
          margin-bottom: 5px;
        }

        .nav-tabs.nav-justified > .dropdown .dropdown-menu {
          top: auto;
          left: auto;
        }

        @media (min-width: 768px) {
          .nav-tabs.nav-justified > li {
            display: table-cell;
            width: 1%;
          }

          .nav-tabs.nav-justified > li > a {
            margin-bottom: 0;
          }
        }

        .nav-tabs.nav-justified > li > a {
          margin-right: 0;
          border-radius: 4px;
        }

        .nav-tabs.nav-justified > .active > a,
        .nav-tabs.nav-justified > .active > a:hover,
        .nav-tabs.nav-justified > .active > a:focus {
          border: 1px solid #ecf0f1;
        }

        @media (min-width: 768px) {
          .nav-tabs.nav-justified > li > a {
            border-bottom: 1px solid #ecf0f1;
            border-radius: 4px 4px 0 0;
          }

          .nav-tabs.nav-justified > .active > a,
          .nav-tabs.nav-justified > .active > a:hover,
          .nav-tabs.nav-justified > .active > a:focus {
            border-bottom-color: #ffffff;
          }
        }

        .nav-pills > li {
          float: left;
        }

        .nav-pills > li > a {
          border-radius: 4px;
        }

        .nav-pills > li + li {
          margin-left: 2px;
        }

        .nav-pills > li.active > a,
        .nav-pills > li.active > a:hover,
        .nav-pills > li.active > a:focus {
          color: #ffffff;
          background-color: #2c3e50;
        }

        .nav-stacked > li {
          float: none;
        }

        .nav-stacked > li + li {
          margin-top: 2px;
          margin-left: 0;
        }

        .nav-justified {
          width: 100%;
        }

        .nav-justified > li {
          float: none;
        }

        .nav-justified > li > a {
          text-align: center;
          margin-bottom: 5px;
        }

        .nav-justified > .dropdown .dropdown-menu {
          top: auto;
          left: auto;
        }

        @media (min-width: 768px) {
          .nav-justified > li {
            display: table-cell;
            width: 1%;
          }

          .nav-justified > li > a {
            margin-bottom: 0;
          }
        }

        .nav-tabs-justified {
          border-bottom: 0;
        }

        .nav-tabs-justified > li > a {
          margin-right: 0;
          border-radius: 4px;
        }

        .nav-tabs-justified > .active > a,
        .nav-tabs-justified > .active > a:hover,
        .nav-tabs-justified > .active > a:focus {
          border: 1px solid #ecf0f1;
        }

        @media (min-width: 768px) {
          .nav-tabs-justified > li > a {
            border-bottom: 1px solid #ecf0f1;
            border-radius: 4px 4px 0 0;
          }

          .nav-tabs-justified > .active > a,
          .nav-tabs-justified > .active > a:hover,
          .nav-tabs-justified > .active > a:focus {
            border-bottom-color: #ffffff;
          }
        }

        .tab-content > .tab-pane {
          display: none;
        }

        .tab-content > .active {
          display: block;
        }

        .nav-tabs .dropdown-menu {
          margin-top: -1px;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        .navbar {
          position: relative;
          min-height: 60px;
          margin-bottom: 21px;
          border: 1px solid transparent;
        }

        @media (min-width: 768px) {
          .navbar {
            border-radius: 4px;
          }
        }

        @media (min-width: 768px) {
          .navbar-header {
            float: left;
          }
        }

        .navbar-collapse {
          max-height: 340px;
          overflow-x: visible;
          padding-right: 15px;
          padding-left: 15px;
          border-top: 1px solid transparent;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
          -webkit-overflow-scrolling: touch;
        }

        .navbar-collapse.in {
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .navbar-collapse {
            width: auto;
            border-top: 0;
            box-shadow: none;
          }

          .navbar-collapse.collapse {
            display: block !important;
            height: auto !important;
            padding-bottom: 0;
            overflow: visible !important;
          }

          .navbar-collapse.in {
            overflow-y: visible;
          }

          .navbar-fixed-top .navbar-collapse,
          .navbar-static-top .navbar-collapse,
          .navbar-fixed-bottom .navbar-collapse {
            padding-left: 0;
            padding-right: 0;
          }
        }

        .container > .navbar-header,
        .container-fluid > .navbar-header,
        .container > .navbar-collapse,
        .container-fluid > .navbar-collapse {
          margin-right: -15px;
          margin-left: -15px;
        }

        @media (min-width: 768px) {
          .container > .navbar-header,
          .container-fluid > .navbar-header,
          .container > .navbar-collapse,
          .container-fluid > .navbar-collapse {
            margin-right: 0;
            margin-left: 0;
          }
        }

        .navbar-static-top {
          z-index: 1000;
          border-width: 0 0 1px;
        }

        @media (min-width: 768px) {
          .navbar-static-top {
            border-radius: 0;
          }
        }

        .navbar-fixed-top,
        .navbar-fixed-bottom {
          position: fixed;
          right: 0;
          left: 0;
          z-index: 1030;
        }

        @media (min-width: 768px) {
          .navbar-fixed-top,
          .navbar-fixed-bottom {
            border-radius: 0;
          }
        }

        .navbar-fixed-top {
          top: 0;
          border-width: 0 0 1px;
        }

        .navbar-fixed-bottom {
          bottom: 0;
          margin-bottom: 0;
          border-width: 1px 0 0;
        }

        .navbar-brand {
          float: left;
          padding: 19.5px 15px;
          font-size: 19px;
          line-height: 21px;
          height: 60px;
        }

        .navbar-brand:hover,
        .navbar-brand:focus {
          text-decoration: none;
        }

        @media (min-width: 768px) {
          .navbar > .container .navbar-brand,
          .navbar > .container-fluid .navbar-brand {
            margin-left: -15px;
          }
        }

        .navbar-toggle {
          position: relative;
          float: right;
          margin-right: 15px;
          padding: 9px 10px;
          margin-top: 13px;
          margin-bottom: 13px;
          background-color: transparent;
          background-image: none;
          border: 1px solid transparent;
          border-radius: 4px;
        }

        .navbar-toggle:focus {
          outline: none;
        }

        .navbar-toggle .icon-bar {
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 1px;
        }

        .navbar-toggle .icon-bar + .icon-bar {
          margin-top: 4px;
        }

        @media (min-width: 768px) {
          .navbar-toggle {
            display: none;
          }
        }

        .navbar-nav {
          margin: 9.75px -15px;
        }

        .navbar-nav > li > a {
          padding-top: 10px;
          padding-bottom: 10px;
          line-height: 21px;
        }

        @media (max-width: 767px) {
          .navbar-nav .open .dropdown-menu {
            position: static;
            float: none;
            width: auto;
            margin-top: 0;
            background-color: transparent;
            border: 0;
            box-shadow: none;
          }

          .navbar-nav .open .dropdown-menu > li > a,
          .navbar-nav .open .dropdown-menu .dropdown-header {
            padding: 5px 15px 5px 25px;
          }

          .navbar-nav .open .dropdown-menu > li > a {
            line-height: 21px;
          }

          .navbar-nav .open .dropdown-menu > li > a:hover,
          .navbar-nav .open .dropdown-menu > li > a:focus {
            background-image: none;
          }
        }

        @media (min-width: 768px) {
          .navbar-nav {
            float: left;
            margin: 0;
          }

          .navbar-nav > li {
            float: left;
          }

          .navbar-nav > li > a {
            padding-top: 19.5px;
            padding-bottom: 19.5px;
          }

          .navbar-nav.navbar-right:last-child {
            margin-right: -15px;
          }
        }

        @media (min-width: 768px) {
          .navbar-left {
            float: left !important;
          }

          .navbar-right {
            float: right !important;
          }
        }

        .navbar-form {
          margin-left: -15px;
          margin-right: -15px;
          padding: 10px 15px;
          border-top: 1px solid transparent;
          border-bottom: 1px solid transparent;
          -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
          margin-top: 8.5px;
          margin-bottom: 8.5px;
        }

        @media (min-width: 768px) {
          .navbar-form .form-group {
            display: inline-block;
            margin-bottom: 0;
            vertical-align: middle;
          }

          .navbar-form .form-control {
            display: inline-block;
            width: auto;
            vertical-align: middle;
          }

          .navbar-form .input-group > .form-control {
            width: 100%;
          }

          .navbar-form .control-label {
            margin-bottom: 0;
            vertical-align: middle;
          }

          .navbar-form .radio,
          .navbar-form .checkbox {
            display: inline-block;
            margin-top: 0;
            margin-bottom: 0;
            padding-left: 0;
            vertical-align: middle;
          }

          .navbar-form .radio input[type="radio"],
          .navbar-form .checkbox input[type="checkbox"] {
            float: none;
            margin-left: 0;
          }

          .navbar-form .has-feedback .form-control-feedback {
            top: 0;
          }
        }

        @media (max-width: 767px) {
          .navbar-form .form-group {
            margin-bottom: 5px;
          }
        }

        @media (min-width: 768px) {
          .navbar-form {
            width: auto;
            border: 0;
            margin-left: 0;
            margin-right: 0;
            padding-top: 0;
            padding-bottom: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
          }

          .navbar-form.navbar-right:last-child {
            margin-right: -15px;
          }
        }

        .navbar-nav > li > .dropdown-menu {
          margin-top: 0;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        .navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        .navbar-btn {
          margin-top: 8.5px;
          margin-bottom: 8.5px;
        }

        .navbar-btn.btn-sm {
          margin-top: 13.5px;
          margin-bottom: 13.5px;
        }

        .navbar-btn.btn-xs {
          margin-top: 19px;
          margin-bottom: 19px;
        }

        .navbar-text {
          margin-top: 19.5px;
          margin-bottom: 19.5px;
        }

        @media (min-width: 768px) {
          .navbar-text {
            float: left;
            margin-left: 15px;
            margin-right: 15px;
          }

          .navbar-text.navbar-right:last-child {
            margin-right: 0;
          }
        }

        .navbar-default {
          background-color: #2c3e50;
          border-color: #202d3b;
        }

        .navbar-default .navbar-brand {
          color: #ffffff;
        }

        .navbar-default .navbar-brand:hover,
        .navbar-default .navbar-brand:focus {
          color: #18bc9c;
          background-color: transparent;
        }

        .navbar-default .navbar-text {
          color: #777777;
        }

        .navbar-default .navbar-nav > li > a {
          color: #ffffff;
        }

        .navbar-default .navbar-nav > li > a:hover,
        .navbar-default .navbar-nav > li > a:focus {
          color: #18bc9c;
          background-color: transparent;
        }

        .navbar-default .navbar-nav > .active > a,
        .navbar-default .navbar-nav > .active > a:hover,
        .navbar-default .navbar-nav > .active > a:focus {
          color: #ffffff;
          background-color: #1a242f;
        }

        .navbar-default .navbar-nav > .disabled > a,
        .navbar-default .navbar-nav > .disabled > a:hover,
        .navbar-default .navbar-nav > .disabled > a:focus {
          color: #cccccc;
          background-color: transparent;
        }

        .navbar-default .navbar-toggle {
          border-color: #1a242f;
        }

        .navbar-default .navbar-toggle:hover,
        .navbar-default .navbar-toggle:focus {
          background-color: #1a242f;
        }

        .navbar-default .navbar-toggle .icon-bar {
          background-color: #ffffff;
        }

        .navbar-default .navbar-collapse,
        .navbar-default .navbar-form {
          border-color: #202d3b;
        }

        .navbar-default .navbar-nav > .open > a,
        .navbar-default .navbar-nav > .open > a:hover,
        .navbar-default .navbar-nav > .open > a:focus {
          background-color: #1a242f;
          color: #ffffff;
        }

        @media (max-width: 767px) {
          .navbar-default .navbar-nav .open .dropdown-menu > li > a {
            color: #ffffff;
          }

          .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
          .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
            color: #18bc9c;
            background-color: transparent;
          }

          .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
          .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
          .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
            color: #ffffff;
            background-color: #1a242f;
          }

          .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
          .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
          .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
            color: #cccccc;
            background-color: transparent;
          }
        }

        .navbar-default .navbar-link {
          color: #ffffff;
        }

        .navbar-default .navbar-link:hover {
          color: #18bc9c;
        }

        .navbar-inverse {
          background-color: #18bc9c;
          border-color: #128f76;
        }

        .navbar-inverse .navbar-brand {
          color: #ffffff;
        }

        .navbar-inverse .navbar-brand:hover,
        .navbar-inverse .navbar-brand:focus {
          color: #2c3e50;
          background-color: transparent;
        }

        .navbar-inverse .navbar-text {
          color: #ffffff;
        }

        .navbar-inverse .navbar-nav > li > a {
          color: #ffffff;
        }

        .navbar-inverse .navbar-nav > li > a:hover,
        .navbar-inverse .navbar-nav > li > a:focus {
          color: #2c3e50;
          background-color: transparent;
        }

        .navbar-inverse .navbar-nav > .active > a,
        .navbar-inverse .navbar-nav > .active > a:hover,
        .navbar-inverse .navbar-nav > .active > a:focus {
          color: #ffffff;
          background-color: #15a589;
        }

        .navbar-inverse .navbar-nav > .disabled > a,
        .navbar-inverse .navbar-nav > .disabled > a:hover,
        .navbar-inverse .navbar-nav > .disabled > a:focus {
          color: #cccccc;
          background-color: transparent;
        }

        .navbar-inverse .navbar-toggle {
          border-color: #128f76;
        }

        .navbar-inverse .navbar-toggle:hover,
        .navbar-inverse .navbar-toggle:focus {
          background-color: #128f76;
        }

        .navbar-inverse .navbar-toggle .icon-bar {
          background-color: #ffffff;
        }

        .navbar-inverse .navbar-collapse,
        .navbar-inverse .navbar-form {
          border-color: #149c82;
        }

        .navbar-inverse .navbar-nav > .open > a,
        .navbar-inverse .navbar-nav > .open > a:hover,
        .navbar-inverse .navbar-nav > .open > a:focus {
          background-color: #15a589;
          color: #ffffff;
        }

        @media (max-width: 767px) {
          .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
            border-color: #128f76;
          }

          .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
            background-color: #128f76;
          }

          .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
            color: #ffffff;
          }

          .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
          .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
            color: #2c3e50;
            background-color: transparent;
          }

          .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
          .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
          .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
            color: #ffffff;
            background-color: #15a589;
          }

          .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
          .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
          .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
            color: #cccccc;
            background-color: transparent;
          }
        }

        .navbar-inverse .navbar-link {
          color: #ffffff;
        }

        .navbar-inverse .navbar-link:hover {
          color: #2c3e50;
        }

        .breadcrumb {
          padding: 8px 15px;
          margin-bottom: 21px;
          list-style: none;
          background-color: #ecf0f1;
          border-radius: 4px;
        }

        .breadcrumb > li {
          display: inline-block;
        }

        .breadcrumb > li + li:before {
          content: "${nbsp}/";
          padding: 0 5px;
          color: #cccccc;
        }

        .breadcrumb > .active {
          color: #95a5a6;
        }

        .pagination {
          display: inline-block;
          padding-left: 0;
          margin: 21px 0;
          border-radius: 4px;
        }

        .pagination > li {
          display: inline;
        }

        .pagination > li > a,
        .pagination > li > span {
          position: relative;
          float: left;
          padding: 10px 15px;
          line-height: 1.42857143;
          text-decoration: none;
          color: #ffffff;
          background-color: #18bc9c;
          border: 1px solid transparent;
          margin-left: -1px;
        }

        .pagination > li:first-child > a,
        .pagination > li:first-child > span {
          margin-left: 0;
          border-bottom-left-radius: 4px;
          border-top-left-radius: 4px;
        }

        .pagination > li:last-child > a,
        .pagination > li:last-child > span {
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
        }

        .pagination > li > a:hover,
        .pagination > li > span:hover,
        .pagination > li > a:focus,
        .pagination > li > span:focus {
          color: #ffffff;
          background-color: #0f7864;
          border-color: transparent;
        }

        .pagination > .active > a,
        .pagination > .active > span,
        .pagination > .active > a:hover,
        .pagination > .active > span:hover,
        .pagination > .active > a:focus,
        .pagination > .active > span:focus {
          z-index: 2;
          color: #ffffff;
          background-color: #0f7864;
          border-color: transparent;
          cursor: default;
        }

        .pagination > .disabled > span,
        .pagination > .disabled > span:hover,
        .pagination > .disabled > span:focus,
        .pagination > .disabled > a,
        .pagination > .disabled > a:hover,
        .pagination > .disabled > a:focus {
          color: #ecf0f1;
          background-color: #3be6c4;
          border-color: transparent;
          cursor: not-allowed;
        }

        .pagination-lg > li > a,
        .pagination-lg > li > span {
          padding: 18px 27px;
          font-size: 19px;
        }

        .pagination-lg > li:first-child > a,
        .pagination-lg > li:first-child > span {
          border-bottom-left-radius: 6px;
          border-top-left-radius: 6px;
        }

        .pagination-lg > li:last-child > a,
        .pagination-lg > li:last-child > span {
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
        }

        .pagination-sm > li > a,
        .pagination-sm > li > span {
          padding: 6px 9px;
          font-size: 13px;
        }

        .pagination-sm > li:first-child > a,
        .pagination-sm > li:first-child > span {
          border-bottom-left-radius: 3px;
          border-top-left-radius: 3px;
        }

        .pagination-sm > li:last-child > a,
        .pagination-sm > li:last-child > span {
          border-bottom-right-radius: 3px;
          border-top-right-radius: 3px;
        }

        .pager {
          padding-left: 0;
          margin: 21px 0;
          list-style: none;
          text-align: center;
        }

        .pager li {
          display: inline;
        }

        .pager li > a,
        .pager li > span {
          display: inline-block;
          padding: 5px 14px;
          background-color: #18bc9c;
          border: 1px solid transparent;
          border-radius: 15px;
        }

        .pager li > a:hover,
        .pager li > a:focus {
          text-decoration: none;
          background-color: #0f7864;
        }

        .pager .next > a,
        .pager .next > span {
          float: right;
        }

        .pager .previous > a,
        .pager .previous > span {
          float: left;
        }

        .pager .disabled > a,
        .pager .disabled > a:hover,
        .pager .disabled > a:focus,
        .pager .disabled > span {
          color: #ffffff;
          background-color: #18bc9c;
          cursor: not-allowed;
        }

        .label {
          display: inline;
          padding: .2em .6em .3em;
          font-size: 75%;
          font-weight: bold;
          line-height: 1;
          color: #ffffff;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: .25em;
        }

        .label[href]:hover,
        .label[href]:focus {
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
        }

        .label:empty {
          display: none;
        }

        .btn .label {
          position: relative;
          top: -1px;
        }

        .label-default {
          background-color: #95a5a6;
        }

        .label-default[href]:hover,
        .label-default[href]:focus {
          background-color: #798d8f;
        }

        .label-primary {
          background-color: #2c3e50;
        }

        .label-primary[href]:hover,
        .label-primary[href]:focus {
          background-color: #1a242f;
        }

        .label-success {
          background-color: #18bc9c;
        }

        .label-success[href]:hover,
        .label-success[href]:focus {
          background-color: #128f76;
        }

        .label-info {
          background-color: #3498db;
        }

        .label-info[href]:hover,
        .label-info[href]:focus {
          background-color: #217dbb;
        }

        .label-warning {
          background-color: #f39c12;
        }

        .label-warning[href]:hover,
        .label-warning[href]:focus {
          background-color: #c87f0a;
        }

        .label-danger {
          background-color: #e74c3c;
        }

        .label-danger[href]:hover,
        .label-danger[href]:focus {
          background-color: #d62c1a;
        }

        .badge {
          display: inline-block;
          min-width: 10px;
          padding: 3px 7px;
          font-size: 13px;
          font-weight: bold;
          color: #ffffff;
          line-height: 1;
          vertical-align: baseline;
          white-space: nowrap;
          text-align: center;
          background-color: #95a5a6;
          border-radius: 10px;
        }

        .badge:empty {
          display: none;
        }

        .btn .badge {
          position: relative;
          top: -1px;
        }

        .btn-xs .badge {
          top: 0;
          padding: 1px 5px;
        }

        a.badge:hover,
        a.badge:focus {
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
        }

        a.list-group-item.active > .badge,
        .nav-pills > .active > a > .badge {
          color: #18bc9c;
          background-color: #ffffff;
        }

        .nav-pills > li > a > .badge {
          margin-left: 3px;
        }

        .jumbotron {
          padding: 30px;
          margin-bottom: 30px;
          color: inherit;
          background-color: #ecf0f1;
        }

        .jumbotron h1,
        .jumbotron .h1 {
          color: inherit;
        }

        .jumbotron p {
          margin-bottom: 15px;
          font-size: 23px;
          font-weight: 200;
        }

        .container .jumbotron {
          border-radius: 6px;
        }

        .jumbotron .container {
          max-width: 100%;
        }

        @media screen and (min-width: 768px) {
          .jumbotron {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .container .jumbotron {
            padding-left: 60px;
            padding-right: 60px;
          }

          .jumbotron h1,
          .jumbotron .h1 {
            font-size: 67.5px;
          }
        }

        .thumbnail {
          display: block;
          padding: 4px;
          margin-bottom: 21px;
          line-height: 1.42857143;
          background-color: #ffffff;
          border: 1px solid #ecf0f1;
          border-radius: 4px;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }

        .thumbnail > img,
        .thumbnail a > img {
          margin-left: auto;
          margin-right: auto;
        }

        a.thumbnail:hover,
        a.thumbnail:focus,
        a.thumbnail.active {
          border-color: #18bc9c;
        }

        .thumbnail .caption {
          padding: 9px;
          color: #2c3e50;
        }

        .alert {
          padding: 15px;
          margin-bottom: 21px;
          border: 1px solid transparent;
          border-radius: 4px;
        }

        .alert h4 {
          margin-top: 0;
          color: inherit;
        }

        .alert .alert-link {
          font-weight: bold;
        }

        .alert > p,
        .alert > ul {
          margin-bottom: 0;
        }

        .alert > p + p {
          margin-top: 5px;
        }

        .alert-dismissable {
          padding-right: 35px;
        }

        .alert-dismissable .close {
          position: relative;
          top: -2px;
          right: -21px;
          color: inherit;
        }

        .alert-success {
          background-color: #18bc9c;
          border-color: #18bc9c;
          color: #ffffff;
        }

        .alert-success hr {
          border-top-color: #15a589;
        }

        .alert-success .alert-link {
          color: #e6e6e6;
        }

        .alert-info {
          background-color: #3498db;
          border-color: #3498db;
          color: #ffffff;
        }

        .alert-info hr {
          border-top-color: #258cd1;
        }

        .alert-info .alert-link {
          color: #e6e6e6;
        }

        .alert-warning {
          background-color: #f39c12;
          border-color: #f39c12;
          color: #ffffff;
        }

        .alert-warning hr {
          border-top-color: #e08e0b;
        }

        .alert-warning .alert-link {
          color: #e6e6e6;
        }

        .alert-danger {
          background-color: #e74c3c;
          border-color: #e74c3c;
          color: #ffffff;
        }

        .alert-danger hr {
          border-top-color: #e43725;
        }

        .alert-danger .alert-link {
          color: #e6e6e6;
        }

        @-webkit-keyframes progress-bar-stripes {
          from {
            background-position: 40px 0;
          }
          to {
            background-position: 0 0;
          }
        }

        @keyframes progress-bar-stripes {
          from {
            background-position: 40px 0;
          }
          to {
            background-position: 0 0;
          }
        }

        .progress {
          overflow: hidden;
          height: 21px;
          margin-bottom: 21px;
          background-color: #ecf0f1;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .progress-bar {
          float: left;
          width: 0%;
          height: 100%;
          font-size: 13px;
          line-height: 21px;
          color: #ffffff;
          text-align: center;
          background-color: #2c3e50;
          -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
          -webkit-transition: width 0.6s ease;
          transition: width 0.6s ease;
        }

        .progress-striped .progress-bar {
          background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
          background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
          background-size: 40px 40px;
        }

        .progress.active .progress-bar {
          -webkit-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
        }

        .progress-bar-success {
          background-color: #18bc9c;
        }

        .progress-striped .progress-bar-success {
          background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
          background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        }

        .progress-bar-info {
          background-color: #3498db;
        }

        .progress-striped .progress-bar-info {
          background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
          background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        }

        .progress-bar-warning {
          background-color: #f39c12;
        }

        .progress-striped .progress-bar-warning {
          background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
          background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        }

        .progress-bar-danger {
          background-color: #e74c3c;
        }

        .progress-striped .progress-bar-danger {
          background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
          background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        }

        .media,
        .media-body {
          overflow: hidden;
          zoom: 1;
        }

        .media,
        .media .media {
          margin-top: 15px;
        }

        .media:first-child {
          margin-top: 0;
        }

        .media-object {
          display: block;
        }

        .media-heading {
          margin: 0 0 5px;
        }

        .media > .pull-left {
          margin-right: 10px;
        }

        .media > .pull-right {
          margin-left: 10px;
        }

        .media-list {
          padding-left: 0;
          list-style: none;
        }

        .list-group {
          margin-bottom: 20px;
          padding-left: 0;
        }

        .list-group-item {
          position: relative;
          display: block;
          padding: 10px 15px;
          margin-bottom: -1px;
          background-color: #ffffff;
          border: 1px solid #ecf0f1;
        }

        .list-group-item:first-child {
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
        }

        .list-group-item:last-child {
          margin-bottom: 0;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        .list-group-item > .badge {
          float: right;
        }

        .list-group-item > .badge + .badge {
          margin-right: 5px;
        }

        a.list-group-item {
          color: #555555;
        }

        a.list-group-item .list-group-item-heading {
          color: #333333;
        }

        a.list-group-item:hover,
        a.list-group-item:focus {
          text-decoration: none;
          background-color: #ecf0f1;
        }

        a.list-group-item.active,
        a.list-group-item.active:hover,
        a.list-group-item.active:focus {
          z-index: 2;
          color: #ffffff;
          background-color: #2c3e50;
          border-color: #2c3e50;
        }

        a.list-group-item.active .list-group-item-heading,
        a.list-group-item.active:hover .list-group-item-heading,
        a.list-group-item.active:focus .list-group-item-heading {
          color: inherit;
        }

        a.list-group-item.active .list-group-item-text,
        a.list-group-item.active:hover .list-group-item-text,
        a.list-group-item.active:focus .list-group-item-text {
          color: #8aa4be;
        }

        .list-group-item-success {
          color: #ffffff;
          background-color: #18bc9c;
        }

        a.list-group-item-success {
          color: #ffffff;
        }

        a.list-group-item-success .list-group-item-heading {
          color: inherit;
        }

        a.list-group-item-success:hover,
        a.list-group-item-success:focus {
          color: #ffffff;
          background-color: #15a589;
        }

        a.list-group-item-success.active,
        a.list-group-item-success.active:hover,
        a.list-group-item-success.active:focus {
          color: #fff;
          background-color: #ffffff;
          border-color: #ffffff;
        }

        .list-group-item-info {
          color: #ffffff;
          background-color: #3498db;
        }

        a.list-group-item-info {
          color: #ffffff;
        }

        a.list-group-item-info .list-group-item-heading {
          color: inherit;
        }

        a.list-group-item-info:hover,
        a.list-group-item-info:focus {
          color: #ffffff;
          background-color: #258cd1;
        }

        a.list-group-item-info.active,
        a.list-group-item-info.active:hover,
        a.list-group-item-info.active:focus {
          color: #fff;
          background-color: #ffffff;
          border-color: #ffffff;
        }

        .list-group-item-warning {
          color: #ffffff;
          background-color: #f39c12;
        }

        a.list-group-item-warning {
          color: #ffffff;
        }

        a.list-group-item-warning .list-group-item-heading {
          color: inherit;
        }

        a.list-group-item-warning:hover,
        a.list-group-item-warning:focus {
          color: #ffffff;
          background-color: #e08e0b;
        }

        a.list-group-item-warning.active,
        a.list-group-item-warning.active:hover,
        a.list-group-item-warning.active:focus {
          color: #fff;
          background-color: #ffffff;
          border-color: #ffffff;
        }

        .list-group-item-danger {
          color: #ffffff;
          background-color: #e74c3c;
        }

        a.list-group-item-danger {
          color: #ffffff;
        }

        a.list-group-item-danger .list-group-item-heading {
          color: inherit;
        }

        a.list-group-item-danger:hover,
        a.list-group-item-danger:focus {
          color: #ffffff;
          background-color: #e43725;
        }

        a.list-group-item-danger.active,
        a.list-group-item-danger.active:hover,
        a.list-group-item-danger.active:focus {
          color: #fff;
          background-color: #ffffff;
          border-color: #ffffff;
        }

        .list-group-item-heading {
          margin-top: 0;
          margin-bottom: 5px;
        }

        .list-group-item-text {
          margin-bottom: 0;
          line-height: 1.3;
        }

        .panel {
          margin-bottom: 21px;
          background-color: #ffffff;
          border: 1px solid transparent;
          border-radius: 4px;
          -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        }

        .panel-body {
          padding: 15px;
        }

        .panel-heading {
          padding: 10px 15px;
          border-bottom: 1px solid transparent;
          border-top-right-radius: 3px;
          border-top-left-radius: 3px;
        }

        .panel-heading > .dropdown .dropdown-toggle {
          color: inherit;
        }

        .panel-title {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 17px;
          color: inherit;
        }

        .panel-title > a {
          color: inherit;
        }

        .panel-footer {
          padding: 10px 15px;
          background-color: #ecf0f1;
          border-top: 1px solid #ecf0f1;
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
        }

        .panel > .list-group {
          margin-bottom: 0;
        }

        .panel > .list-group .list-group-item {
          border-width: 1px 0;
          border-radius: 0;
        }

        .panel > .list-group:first-child .list-group-item:first-child {
          border-top: 0;
          border-top-right-radius: 3px;
          border-top-left-radius: 3px;
        }

        .panel > .list-group:last-child .list-group-item:last-child {
          border-bottom: 0;
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
        }

        .panel-heading + .list-group .list-group-item:first-child {
          border-top-width: 0;
        }

        .panel > .table,
        .panel > .table-responsive > .table {
          margin-bottom: 0;
        }

        .panel > .table:first-child,
        .panel > .table-responsive:first-child > .table:first-child {
          border-top-right-radius: 3px;
          border-top-left-radius: 3px;
        }

        .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
        .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
        .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
        .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
        .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
        .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
        .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
        .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
          border-top-left-radius: 3px;
        }

        .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
        .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
        .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
        .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
        .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
        .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
        .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
        .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
          border-top-right-radius: 3px;
        }

        .panel > .table:last-child,
        .panel > .table-responsive:last-child > .table:last-child {
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
        }

        .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
        .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
        .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
        .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
        .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
        .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
        .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
        .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
          border-bottom-left-radius: 3px;
        }

        .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
        .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
        .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
        .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
        .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
        .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
        .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
        .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
          border-bottom-right-radius: 3px;
        }

        .panel > .panel-body + .table,
        .panel > .panel-body + .table-responsive {
          border-top: 1px solid #ecf0f1;
        }

        .panel > .table > tbody:first-child > tr:first-child th,
        .panel > .table > tbody:first-child > tr:first-child td {
          border-top: 0;
        }

        .panel > .table-bordered,
        .panel > .table-responsive > .table-bordered {
          border: 0;
        }

        .panel > .table-bordered > thead > tr > th:first-child,
        .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
        .panel > .table-bordered > tbody > tr > th:first-child,
        .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
        .panel > .table-bordered > tfoot > tr > th:first-child,
        .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
        .panel > .table-bordered > thead > tr > td:first-child,
        .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
        .panel > .table-bordered > tbody > tr > td:first-child,
        .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
        .panel > .table-bordered > tfoot > tr > td:first-child,
        .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
          border-left: 0;
        }

        .panel > .table-bordered > thead > tr > th:last-child,
        .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
        .panel > .table-bordered > tbody > tr > th:last-child,
        .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
        .panel > .table-bordered > tfoot > tr > th:last-child,
        .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
        .panel > .table-bordered > thead > tr > td:last-child,
        .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
        .panel > .table-bordered > tbody > tr > td:last-child,
        .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
        .panel > .table-bordered > tfoot > tr > td:last-child,
        .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
          border-right: 0;
        }

        .panel > .table-bordered > thead > tr:first-child > td,
        .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
        .panel > .table-bordered > tbody > tr:first-child > td,
        .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
        .panel > .table-bordered > thead > tr:first-child > th,
        .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
        .panel > .table-bordered > tbody > tr:first-child > th,
        .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
          border-bottom: 0;
        }

        .panel > .table-bordered > tbody > tr:last-child > td,
        .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
        .panel > .table-bordered > tfoot > tr:last-child > td,
        .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
        .panel > .table-bordered > tbody > tr:last-child > th,
        .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
        .panel > .table-bordered > tfoot > tr:last-child > th,
        .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
          border-bottom: 0;
        }

        .panel > .table-responsive {
          border: 0;
          margin-bottom: 0;
        }

        .panel-group {
          margin-bottom: 21px;
        }

        .panel-group .panel {
          margin-bottom: 0;
          border-radius: 4px;
          overflow: hidden;
        }

        .panel-group .panel + .panel {
          margin-top: 5px;
        }

        .panel-group .panel-heading {
          border-bottom: 0;
        }

        .panel-group .panel-heading + .panel-collapse .panel-body {
          border-top: 1px solid #ecf0f1;
        }

        .panel-group .panel-footer {
          border-top: 0;
        }

        .panel-group .panel-footer + .panel-collapse .panel-body {
          border-bottom: 1px solid #ecf0f1;
        }

        .panel-default {
          border-color: #ecf0f1;
        }

        .panel-default > .panel-heading {
          color: #2c3e50;
          background-color: #ecf0f1;
          border-color: #ecf0f1;
        }

        .panel-default > .panel-heading + .panel-collapse .panel-body {
          border-top-color: #ecf0f1;
        }

        .panel-default > .panel-footer + .panel-collapse .panel-body {
          border-bottom-color: #ecf0f1;
        }

        .panel-primary {
          border-color: #2c3e50;
        }

        .panel-primary > .panel-heading {
          color: #ffffff;
          background-color: #2c3e50;
          border-color: #2c3e50;
        }

        .panel-primary > .panel-heading + .panel-collapse .panel-body {
          border-top-color: #2c3e50;
        }

        .panel-primary > .panel-footer + .panel-collapse .panel-body {
          border-bottom-color: #2c3e50;
        }

        .panel-success {
          border-color: #18bc9c;
        }

        .panel-success > .panel-heading {
          color: #ffffff;
          background-color: #18bc9c;
          border-color: #18bc9c;
        }

        .panel-success > .panel-heading + .panel-collapse .panel-body {
          border-top-color: #18bc9c;
        }

        .panel-success > .panel-footer + .panel-collapse .panel-body {
          border-bottom-color: #18bc9c;
        }

        .panel-info {
          border-color: #3498db;
        }

        .panel-info > .panel-heading {
          color: #ffffff;
          background-color: #3498db;
          border-color: #3498db;
        }

        .panel-info > .panel-heading + .panel-collapse .panel-body {
          border-top-color: #3498db;
        }

        .panel-info > .panel-footer + .panel-collapse .panel-body {
          border-bottom-color: #3498db;
        }

        .panel-warning {
          border-color: #f39c12;
        }

        .panel-warning > .panel-heading {
          color: #ffffff;
          background-color: #f39c12;
          border-color: #f39c12;
        }

        .panel-warning > .panel-heading + .panel-collapse .panel-body {
          border-top-color: #f39c12;
        }

        .panel-warning > .panel-footer + .panel-collapse .panel-body {
          border-bottom-color: #f39c12;
        }

        .panel-danger {
          border-color: #e74c3c;
        }

        .panel-danger > .panel-heading {
          color: #ffffff;
          background-color: #e74c3c;
          border-color: #e74c3c;
        }

        .panel-danger > .panel-heading + .panel-collapse .panel-body {
          border-top-color: #e74c3c;
        }

        .panel-danger > .panel-footer + .panel-collapse .panel-body {
          border-bottom-color: #e74c3c;
        }

        .well {
          min-height: 20px;
          padding: 19px;
          margin-bottom: 20px;
          background-color: #ecf0f1;
          border: 1px solid transparent;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        }

        .well blockquote {
          border-color: #ddd;
          border-color: rgba(0, 0, 0, 0.15);
        }

        .well-lg {
          padding: 24px;
          border-radius: 6px;
        }

        .well-sm {
          padding: 9px;
          border-radius: 3px;
        }

        .close {
          float: right;
          font-size: 22.5px;
          font-weight: bold;
          line-height: 1;
          color: #000000;
          text-shadow: 0 1px 0 #ffffff;
          opacity: 0.2;
          filter: alpha(opacity=20);
        }

        .close:hover,
        .close:focus {
          color: #000000;
          text-decoration: none;
          cursor: pointer;
          opacity: 0.5;
          filter: alpha(opacity=50);
        }

        button.close {
          padding: 0;
          cursor: pointer;
          background: transparent;
          border: 0;
          -webkit-appearance: none;
        }

        .modal-open {
          overflow: hidden;
        }

        .modal {
          display: none;
          overflow: auto;
          overflow-y: scroll;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1050;
          -webkit-overflow-scrolling: touch;
          outline: 0;
        }

        .modal.fade .modal-dialog {
          -webkit-transform: translate(0, -25%);
          -ms-transform: translate(0, -25%);
          transform: translate(0, -25%);
          -webkit-transition: -webkit-transform 0.3s ease-out;
          -moz-transition: -moz-transform 0.3s ease-out;
          -o-transition: -o-transform 0.3s ease-out;
          transition: transform 0.3s ease-out;
        }

        .modal.in .modal-dialog {
          -webkit-transform: translate(0, 0);
          -ms-transform: translate(0, 0);
          transform: translate(0, 0);
        }

        .modal-dialog {
          position: relative;
          width: auto;
          margin: 10px;
        }

        .modal-content {
          position: relative;
          background-color: #ffffff;
          border: 1px solid #999999;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
          background-clip: padding-box;
          outline: none;
        }

        .modal-backdrop {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1040;
          background-color: #000000;
        }

        .modal-backdrop.fade {
          opacity: 0;
          filter: alpha(opacity=0);
        }

        .modal-backdrop.in {
          opacity: 0.5;
          filter: alpha(opacity=50);
        }

        .modal-header {
          padding: 15px;
          border-bottom: 1px solid #e5e5e5;
          min-height: 16.42857143px;
        }

        .modal-header .close {
          margin-top: -2px;
        }

        .modal-title {
          margin: 0;
          line-height: 1.42857143;
        }

        .modal-body {
          position: relative;
          padding: 20px;
        }

        .modal-footer {
          margin-top: 15px;
          padding: 19px 20px 20px;
          text-align: right;
          border-top: 1px solid #e5e5e5;
        }

        .modal-footer .btn + .btn {
          margin-left: 5px;
          margin-bottom: 0;
        }

        .modal-footer .btn-group .btn + .btn {
          margin-left: -1px;
        }

        .modal-footer .btn-block + .btn-block {
          margin-left: 0;
        }

        @media (min-width: 768px) {
          .modal-dialog {
            width: 600px;
            margin: 30px auto;
          }

          .modal-content {
            -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
          }

          .modal-sm {
            width: 300px;
          }
        }

        @media (min-width: 992px) {
          .modal-lg {
            width: 900px;
          }
        }

        .tooltip {
          position: absolute;
          z-index: 1030;
          display: block;
          visibility: visible;
          font-size: 13px;
          line-height: 1.4;
          opacity: 0;
          filter: alpha(opacity=0);
        }

        .tooltip.in {
          opacity: 0.9;
          filter: alpha(opacity=90);
        }

        .tooltip.top {
          margin-top: -3px;
          padding: 5px 0;
        }

        .tooltip.right {
          margin-left: 3px;
          padding: 0 5px;
        }

        .tooltip.bottom {
          margin-top: 3px;
          padding: 5px 0;
        }

        .tooltip.left {
          margin-left: -3px;
          padding: 0 5px;
        }

        .tooltip-inner {
          max-width: 200px;
          padding: 3px 8px;
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          background-color: rgba(0, 0, 0, 0.9);
          border-radius: 4px;
        }

        .tooltip-arrow {
          position: absolute;
          width: 0;
          height: 0;
          border-color: transparent;
          border-style: solid;
        }

        .tooltip.top .tooltip-arrow {
          bottom: 0;
          left: 50%;
          margin-left: -5px;
          border-width: 5px 5px 0;
          border-top-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.top-left .tooltip-arrow {
          bottom: 0;
          left: 5px;
          border-width: 5px 5px 0;
          border-top-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.top-right .tooltip-arrow {
          bottom: 0;
          right: 5px;
          border-width: 5px 5px 0;
          border-top-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.right .tooltip-arrow {
          top: 50%;
          left: 0;
          margin-top: -5px;
          border-width: 5px 5px 5px 0;
          border-right-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.left .tooltip-arrow {
          top: 50%;
          right: 0;
          margin-top: -5px;
          border-width: 5px 0 5px 5px;
          border-left-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.bottom .tooltip-arrow {
          top: 0;
          left: 50%;
          margin-left: -5px;
          border-width: 0 5px 5px;
          border-bottom-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.bottom-left .tooltip-arrow {
          top: 0;
          left: 5px;
          border-width: 0 5px 5px;
          border-bottom-color: rgba(0, 0, 0, 0.9);
        }

        .tooltip.bottom-right .tooltip-arrow {
          top: 0;
          right: 5px;
          border-width: 0 5px 5px;
          border-bottom-color: rgba(0, 0, 0, 0.9);
        }

        .popover {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1010;
          display: none;
          max-width: 276px;
          padding: 1px;
          text-align: left;
          background-color: #ffffff;
          background-clip: padding-box;
          border: 1px solid #cccccc;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          white-space: normal;
        }

        .popover.top {
          margin-top: -10px;
        }

        .popover.right {
          margin-left: 10px;
        }

        .popover.bottom {
          margin-top: 10px;
        }

        .popover.left {
          margin-left: -10px;
        }

        .popover-title {
          margin: 0;
          padding: 8px 14px;
          font-size: 15px;
          font-weight: normal;
          line-height: 18px;
          background-color: #f7f7f7;
          border-bottom: 1px solid #ebebeb;
          border-radius: 5px 5px 0 0;
        }

        .popover-content {
          padding: 9px 14px;
        }

        .popover > .arrow,
        .popover > .arrow:after {
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border-color: transparent;
          border-style: solid;
        }

        .popover > .arrow {
          border-width: 11px;
        }

        .popover > .arrow:after {
          border-width: 10px;
          content: "";
        }

        .popover.top > .arrow {
          left: 50%;
          margin-left: -11px;
          border-bottom-width: 0;
          border-top-color: #999999;
          border-top-color: rgba(0, 0, 0, 0.25);
          bottom: -11px;
        }

        .popover.top > .arrow:after {
          content: " ";
          bottom: 1px;
          margin-left: -10px;
          border-bottom-width: 0;
          border-top-color: #ffffff;
        }

        .popover.right > .arrow {
          top: 50%;
          left: -11px;
          margin-top: -11px;
          border-left-width: 0;
          border-right-color: #999999;
          border-right-color: rgba(0, 0, 0, 0.25);
        }

        .popover.right > .arrow:after {
          content: " ";
          left: 1px;
          bottom: -10px;
          border-left-width: 0;
          border-right-color: #ffffff;
        }

        .popover.bottom > .arrow {
          left: 50%;
          margin-left: -11px;
          border-top-width: 0;
          border-bottom-color: #999999;
          border-bottom-color: rgba(0, 0, 0, 0.25);
          top: -11px;
        }

        .popover.bottom > .arrow:after {
          content: " ";
          top: 1px;
          margin-left: -10px;
          border-top-width: 0;
          border-bottom-color: #ffffff;
        }

        .popover.left > .arrow {
          top: 50%;
          right: -11px;
          margin-top: -11px;
          border-right-width: 0;
          border-left-color: #999999;
          border-left-color: rgba(0, 0, 0, 0.25);
        }

        .popover.left > .arrow:after {
          content: " ";
          right: 1px;
          border-right-width: 0;
          border-left-color: #ffffff;
          bottom: -10px;
        }

        .carousel {
          position: relative;
        }

        .carousel-inner {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .carousel-inner > .item {
          display: none;
          position: relative;
          -webkit-transition: 0.6s ease-in-out left;
          transition: 0.6s ease-in-out left;
        }

        .carousel-inner > .item > img,
        .carousel-inner > .item > a > img {
          line-height: 1;
        }

        .carousel-inner > .active,
        .carousel-inner > .next,
        .carousel-inner > .prev {
          display: block;
        }

        .carousel-inner > .active {
          left: 0;
        }

        .carousel-inner > .next,
        .carousel-inner > .prev {
          position: absolute;
          top: 0;
          width: 100%;
        }

        .carousel-inner > .next {
          left: 100%;
        }

        .carousel-inner > .prev {
          left: -100%;
        }

        .carousel-inner > .next.left,
        .carousel-inner > .prev.right {
          left: 0;
        }

        .carousel-inner > .active.left {
          left: -100%;
        }

        .carousel-inner > .active.right {
          left: 100%;
        }

        .carousel-control {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 15%;
          opacity: 0.5;
          filter: alpha(opacity=50);
          font-size: 20px;
          color: #ffffff;
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        }

        .carousel-control.left {
          background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, 0.5) 0%), color-stop(rgba(0, 0, 0, 0.0001) 100%));
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
          background-repeat: repeat-x;
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
        }

        .carousel-control.right {
          left: auto;
          right: 0;
          background-image: -webkit-linear-gradient(left, color-stop(rgba(0, 0, 0, 0.0001) 0%), color-stop(rgba(0, 0, 0, 0.5) 100%));
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
          background-repeat: repeat-x;
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
        }

        .carousel-control:hover,
        .carousel-control:focus {
          outline: none;
          color: #ffffff;
          text-decoration: none;
          opacity: 0.9;
          filter: alpha(opacity=90);
        }

        .carousel-control .icon-prev,
        .carousel-control .icon-next,
        .carousel-control .glyphicon-chevron-left,
        .carousel-control .glyphicon-chevron-right {
          position: absolute;
          top: 50%;
          z-index: 5;
          display: inline-block;
        }

        .carousel-control .icon-prev,
        .carousel-control .glyphicon-chevron-left {
          left: 50%;
        }

        .carousel-control .icon-next,
        .carousel-control .glyphicon-chevron-right {
          right: 50%;
        }

        .carousel-control .icon-prev,
        .carousel-control .icon-next {
          width: 20px;
          height: 20px;
          margin-top: -10px;
          margin-left: -10px;
          font-family: serif;
        }

        .carousel-control .icon-prev:before {
          content: '\\2039';
        }

        .carousel-control .icon-next:before {
          content: '\\203a';
        }

        .carousel-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          z-index: 15;
          width: 60%;
          margin-left: -30%;
          padding-left: 0;
          list-style: none;
          text-align: center;
        }

        .carousel-indicators li {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin: 1px;
          text-indent: -999px;
          border: 1px solid #ffffff;
          border-radius: 10px;
          cursor: pointer;
          background-color: #000 \9;
          background-color: rgba(0, 0, 0, 0);
        }

        .carousel-indicators .active {
          margin: 0;
          width: 12px;
          height: 12px;
          background-color: #ffffff;
        }

        .carousel-caption {
          position: absolute;
          left: 15%;
          right: 15%;
          bottom: 20px;
          z-index: 10;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #ffffff;
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        }

        .carousel-caption .btn {
          text-shadow: none;
        }

        @media screen and (min-width: 768px) {
          .carousel-control .glyphicon-chevron-left,
          .carousel-control .glyphicon-chevron-right,
          .carousel-control .icon-prev,
          .carousel-control .icon-next {
            width: 30px;
            height: 30px;
            margin-top: -15px;
            margin-left: -15px;
            font-size: 30px;
          }

          .carousel-caption {
            left: 20%;
            right: 20%;
            padding-bottom: 30px;
          }

          .carousel-indicators {
            bottom: 20px;
          }
        }

        @-ms-viewport {
          width: device-width;
        }

        .visible-xs,
        .visible-sm,
        .visible-md,
        .visible-lg {
          display: none !important;
        }

        @media (max-width: 767px) {
          .visible-xs {
            display: block !important;
          }

          table.visible-xs {
            display: table;
          }

          tr.visible-xs {
            display: table-row !important;
          }

          th.visible-xs,
          td.visible-xs {
            display: table-cell !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .visible-sm {
            display: block !important;
          }

          table.visible-sm {
            display: table;
          }

          tr.visible-sm {
            display: table-row !important;
          }

          th.visible-sm,
          td.visible-sm {
            display: table-cell !important;
          }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
          .visible-md {
            display: block !important;
          }

          table.visible-md {
            display: table;
          }

          tr.visible-md {
            display: table-row !important;
          }

          th.visible-md,
          td.visible-md {
            display: table-cell !important;
          }
        }

        @media (min-width: 1200px) {
          .visible-lg {
            display: block !important;
          }

          table.visible-lg {
            display: table;
          }

          tr.visible-lg {
            display: table-row !important;
          }

          th.visible-lg,
          td.visible-lg {
            display: table-cell !important;
          }
        }

        @media (max-width: 767px) {
          .hidden-xs {
            display: none !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .hidden-sm {
            display: none !important;
          }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
          .hidden-md {
            display: none !important;
          }
        }

        @media (min-width: 1200px) {
          .hidden-lg {
            display: none !important;
          }
        }

        .visible-print {
          display: none !important;
        }

        @media print {
          .visible-print {
            display: block !important;
          }

          table.visible-print {
            display: table;
          }

          tr.visible-print {
            display: table-row !important;
          }

          th.visible-print,
          td.visible-print {
            display: table-cell !important;
          }
        }

        @media print {
          .hidden-print {
            display: none !important;
          }
        }

        .btn:active {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .btn-group.open .dropdown-toggle {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .text-primary,
        .text-primary:hover {
          color: #2c3e50;
        }

        .text-success,
        .text-success:hover {
          color: #18bc9c;
        }

        .text-danger,
        .text-danger:hover {
          color: #e74c3c;
        }

        .text-warning,
        .text-warning:hover {
          color: #f39c12;
        }

        .text-info,
        .text-info:hover {
          color: #3498db;
        }

        table a,
        .table a {
          text-decoration: underline;
        }

        table .success,
        .table .success,
        table .warning,
        .table .warning,
        table .danger,
        .table .danger,
        table .info,
        .table .info {
          color: #fff;
        }

        table .success a,
        .table .success a,
        table .warning a,
        .table .warning a,
        table .danger a,
        .table .danger a,
        table .info a,
        .table .info a {
          color: #fff;
        }

        table > thead > tr > th,
        .table > thead > tr > th,
        table > tbody > tr > th,
        .table > tbody > tr > th,
        table > tfoot > tr > th,
        .table > tfoot > tr > th,
        table > thead > tr > td,
        .table > thead > tr > td,
        table > tbody > tr > td,
        .table > tbody > tr > td,
        table > tfoot > tr > td,
        .table > tfoot > tr > td {
          border: none;
        }

        table-bordered > thead > tr > th,
        .table-bordered > thead > tr > th,
        table-bordered > tbody > tr > th,
        .table-bordered > tbody > tr > th,
        table-bordered > tfoot > tr > th,
        .table-bordered > tfoot > tr > th,
        table-bordered > thead > tr > td,
        .table-bordered > thead > tr > td,
        table-bordered > tbody > tr > td,
        .table-bordered > tbody > tr > td,
        table-bordered > tfoot > tr > td,
        .table-bordered > tfoot > tr > td {
          border: 1px solid #ecf0f1;
        }

        .form-control,
        textarea.form-control,
        input[type="text"],
        input[type="password"],
        input[type="datetime"],
        input[type="datetime-local"],
        input[type="date"],
        input[type="month"],
        input[type="time"],
        input[type="week"],
        input[type="number"],
        input[type="email"],
        input[type="url"],
        input[type="search"],
        input[type="tel"],
        input[type="color"],
        .uneditable-input {
          border-width: 2px;
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .form-control:focus,
        textarea.form-control:focus,
        input[type="text"]:focus,
        input[type="password"]:focus,
        input[type="datetime"]:focus,
        input[type="datetime-local"]:focus,
        input[type="date"]:focus,
        input[type="month"]:focus,
        input[type="time"]:focus,
        input[type="week"]:focus,
        input[type="number"]:focus,
        input[type="email"]:focus,
        input[type="url"]:focus,
        input[type="search"]:focus,
        input[type="tel"]:focus,
        input[type="color"]:focus,
        .uneditable-input:focus {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .has-warning .help-block,
        .has-warning .control-label {
          color: #f39c12;
        }

        .has-warning .form-control,
        .has-warning .form-control:focus {
          border: 2px solid #f39c12;
        }

        .has-error .help-block,
        .has-error .control-label {
          color: #e74c3c;
        }

        .has-error .form-control,
        .has-error .form-control:focus {
          border: 2px solid #e74c3c;
        }

        .has-success .help-block,
        .has-success .control-label {
          color: #18bc9c;
        }

        .has-success .form-control,
        .has-success .form-control:focus {
          border: 2px solid #18bc9c;
        }

        .nav .open > a,
        .nav .open > a:hover,
        .nav .open > a:focus {
          border-color: transparent;
        }

        .pager a,
        .pager a:hover {
          color: #fff;
        }

        .pager .disabled > a,
        .pager .disabled > a:hover,
        .pager .disabled > a:focus,
        .pager .disabled > span {
          background-color: #3be6c4;
        }

        .alert a,
        .alert .alert-link {
          color: #fff;
          text-decoration: underline;
        }

        .progress {
          height: 10px;
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .well {
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .clearfix:before,
        .clearfix:after,
        .container:before,
        .container:after,
        .container-fluid:before,
        .container-fluid:after,
        .row:before,
        .row:after,
        .form-horizontal .form-group:before,
        .form-horizontal .form-group:after,
        .btn-toolbar:before,
        .btn-toolbar:after,
        .btn-group-vertical > .btn-group:before,
        .btn-group-vertical > .btn-group:after,
        .nav:before,
        .nav:after,
        .navbar:before,
        .navbar:after,
        .navbar-header:before,
        .navbar-header:after,
        .navbar-collapse:before,
        .navbar-collapse:after,
        .pager:before,
        .pager:after,
        .panel-body:before,
        .panel-body:after,
        .modal-footer:before,
        .modal-footer:after {
          content: " ";
          display: table;
        }

        .clearfix:after,
        .container:after,
        .container-fluid:after,
        .row:after,
        .form-horizontal .form-group:after,
        .btn-toolbar:after,
        .btn-group-vertical > .btn-group:after,
        .nav:after,
        .navbar:after,
        .navbar-header:after,
        .navbar-collapse:after,
        .pager:after,
        .panel-body:after,
        .modal-footer:after {
          clear: both;
        }

        .center-block {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .pull-right {
          float: right !important;
        }

        .pull-left {
          float: left !important;
        }

        .hide {
          display: none !important;
        }

        .show {
          display: block !important;
        }

        .invisible {
          visibility: hidden;
        }

        .text-hide {
          font: 0/0 a;
          color: transparent;
          text-shadow: none;
          background-color: transparent;
          border: 0;
        }

        .hidden {
          display: none !important;
          visibility: hidden !important;
        }

        .affix {
          position: fixed;
        }
      `}} />
    );
  }
}
