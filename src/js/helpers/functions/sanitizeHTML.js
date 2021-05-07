export const sanitizeHTML = (html) => {
    return (html && html.replace(/(<? *script)/gi, 'illegalscript')) || '';   
}