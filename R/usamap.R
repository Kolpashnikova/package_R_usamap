#' US Map Visualization for Time-Use Data in R
#'
#' @description
#' Draws an interactive US map for state-level data.
#'
#' @usage
#' usmap(df)
#' usmap(df, startCOlor, endCOlor)
#'
#' @param df json data with keys as two-letter state codes and values.
#'
#' @param startColor the RGB color list for the lower values of gradient.
#' The default is blue.
#'
#' @param endColor the RGB color list for higher values of gradient.
#' The default is red.
#'
#' @references
#' Kolpashnikova, Kamila. (2022). US Map Visualization for Time-Use Data in R. Toronto,ON: York University.
#'
#' @import htmlwidgets
#'
#' @export
usamap <- function(df, minimum = 0, maximum = 1440, startColor = c(0,0,255), endColor = c(255,0,0), width = "auto", height = "auto", elementId = NULL) {

  # forward options using x
  x = list(
    data = df,
    minimum = minimum,
    maximum = maximum,
    startColor = startColor,
    endColor = endColor,
    message = "message"
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'usmap',
    x,
    width = width,
    height = height,
    package = 'usmap',
    elementId = elementId
  )
}

#' Shiny bindings for usmap
#'
#' Output and render functions for using usmap within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a usmap
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name usmap-shiny
#'
#' @export
usmapOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'usmap', width, height, package = 'usmap')
}

#' @rdname usmap-shiny
#' @export
renderUsmap <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, usmapOutput, env, quoted = TRUE)
}
